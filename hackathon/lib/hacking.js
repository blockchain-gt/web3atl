import { ethers } from 'ethers'
import { readFile, writeFile } from 'fs'
import * as dotenv from 'dotenv'
dotenv.config()

const CONTRACT_ADDRESS = "0x8d44d796e55c059e0eb7dBe03867Ff7029E8FC56"

let contract
let data = {}
let num_hackers = 0

readFile('abi.json', 'utf8', (err, abi) => {
    if (err) {
        console.log(err)
    }
    main(abi)
})

async function updateHackers() {
    while (true) {
        let hacker
        try {
            hacker = await contract.hackers(num_hackers)
            num_hackers += 1
        } catch (err) {
            break
        }
        let team = await contract.teams(hacker)
        if (!data[team]) {
            data[team] = []
        }
        data[team].push({
            hacker: hacker,
            score: null
        })
    }
}

async function updateScores() {
    for (let team of Object.keys(data)) {
        for (let hackerObj of data[team]) {
            let score = await contract.scores(hackerObj.hacker)
            hackerObj.score = Number(score)
        }
    }
}

function sortData() {
    let newData = {}
    let teamScores = []
    for (let team of Object.keys(data)) {
        data[team].sort((a,b) => {
            return b.score - a.score
        })
        teamScores.push({
            team: team,
            highestScore: data[team][0].score
        })
    }
    teamScores.sort((a,b) => {
        return b.highestScore - a.highestScore
    })
    return teamScores.map((t) => {return t.team})
}

async function main(abi) {
    const provider = new ethers.providers.AlchemyProvider("goerli", process.env.API_KEY)
    contract = new ethers.Contract(CONTRACT_ADDRESS,abi,provider)
    
    setInterval(async () => {
        console.log('updating hackers')
        await updateHackers()
        
        console.log('updating scores')
        await updateScores()
        
        console.log('sorting data')
        let teamOrder = sortData()
        data['teamOrder'] = teamOrder
        let count = 5
        let totalWinningScore = 0
        for (let team of teamOrder) {
            totalWinningScore += data[team][0].score
        }
        data['totalWinningScore'] = totalWinningScore
        
        console.log('writing data')
        writeFile('../public/data.json', JSON.stringify(data, null, 4), (err) => {
            if (err) {
                console.log(err)
            }
        })
        delete data['teamOrder']
        delete data['totalWinningScore']
    }, 10000)
}
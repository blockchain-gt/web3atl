import React, { useState, useEffect, createRef } from 'react'
import { TeamResult } from './../components/TeamResult'
import { Columns } from './../components/Columns'
import { useHasMounted } from '../utils'
import AnimateBubbles from '../components/Animate'

export function Sprint() {
  let data = useData()
  const hasMounted = useHasMounted(100)
  data['isLive'] = true
  return (
    <>
      <section className="text-white z-20 flex max-w-screen-2xl mx-auto justify-start pt-20 min-h-screen drop-shadow">
        <div className="max-w-[min(1200px,160vw)] px-16 md:mx-24 lg:mx-36 xl:mx-56">
          <h1 className="font-bold text-6xl pb-10 text-gray-200">Solidity Sprint Leaderboard</h1>
          <span className={(data['isLive'] ? 'text-green-400/80 ' : 'text-red-400/80 ') + 'rounded-lg px-2 text-2xl font-extrabold'}>
            {data['isLive'] ? 'LIVE' : 'ENDED'}
          </span>
          <div>
            <Columns />
            {hasMounted ? (
              <AnimateBubbles>
                {data['teamOrder'].map((team, i) => {
                  return <TeamResult data={data} team={team} key={i} ref={createRef()} />
                })}
              </AnimateBubbles>
            ) : (
              <></>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

const getData = async () => {
  let res = await fetch('./data.json', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  })
  return await res.json()
}

const useData = () => {
  let [data, setData] = useState({})
  useEffect(() => {
    getData().then((data) => setData(data))
    setInterval(() => {
      getData().then((data) => setData(data))
    }, 10000)
  }, [])
  console.log(data)
  // window.shuff = () => setData((data) => data.reverse())
  return data
}

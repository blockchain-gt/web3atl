import React, { forwardRef } from 'react'

export const TeamResult = forwardRef(({ data, team, key, ref }) => {
  let highestScore = data[team][0].score
  let prize = (highestScore / data['totalWinningScore']) * 2500
  return (
    <div ref={ref} className="grid grid-cols-3 bg-purple-500/40 my-6 py-2 rounded-md shadow-purple-500 shadow-lg justify-items-center" key={key}>
      <div>{team}</div>
      <div>
        {data[team].map((h, j) => {
          return (
            <div>
              {h.hacker.slice(0, 6) + '...'}, {h.score}
            </div>
          )
        })}
      </div>
      <div>${Math.round(prize)}</div>
    </div>
  )
})

import React, { Suspense, useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Canvas } from 'react-three-fiber'

import Effects from './Effects'
import MetaballSwarm from './MetaballSwarm/MetaballSwarm'

import './styles.css'

const useHasMounted = () => {
  const [hasMounted, setHasMounted] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setHasMounted(true)
    }, 1000)
  }, [])
  return hasMounted
}

function App() {
  const urls = [
    'https://media.graphassets.com/RmZ06tMSj6st04ov8lkh',
    'https://media.graphassets.com/U7IY50hxQyRtmm5CjURM',
    'https://media.graphassets.com/rTq3hpFTGqzVkXvT2gQ7',
    'https://media.graphassets.com/Nw6xvqTARD6EGkh38yP2'
  ]
  const hasMounted = useHasMounted()

  const extra = `z-10 transition-all ease-out duration-1000 delay-1000 drop-shadow ${hasMounted ? 'opacity-100' : 'opacity-0 translate-y-4'}`
  return (
    <>
      <div style={{ height: '100vh' }} className="fixed w-full pointer-events-none">
        <Canvas gl={{ autoClear: false }} pixelRatio={getDevicePixelRatio(1)}>
          <MetaballSwarm />
          <Suspense fallback={null}>
            <Effects />
          </Suspense>
        </Canvas>
      </div>
      {/* First fold */}
      <section className="text-white z-20 flex max-w-screen-2xl mx-auto justify-end items-center min-h-screen drop-shadow">
        <div className="max-w-[600px]">
          <h3 className={`text-3xl font-extrabold  transition-all duration-1000 ease-out ${hasMounted ? 'opacity-75' : 'opacity-0 translate-y-4'}`}>Web3ATL</h3>
          <h1
            className={`text-8xl font-black drop-shadow-2xl transition-all duration-1000 delay-500 ease-out font-mono ${
              hasMounted ? '' : 'opacity-0 translate-y-4'
            }`}>
            Hackathon.
          </h1>
          <div className={extra}>
            <p className={`mb-3 text-gray-400`}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta tempore perspiciatis id similique, laudantium non in veritatis a suscipit pariatur
              voluptates doloremque corporis rerum voluptatibus adipisci ut placeat facilis amet.
            </p>
            <p className="uppercase text-white font-bold mb-8 ">Oct 26 - Nov 6</p>
            <div className={`grid grid-cols-2 gap-4`}>
              <a href="https://forms.gle/YN6NSAbe2CyuzADc7" className="cta-button">
                Apply
              </a>
              <a href="https://docs.google.com/document/d/1SKRlqt5lIM3IOvXQeupBlJwITV3hggryKK9T0wXo9fk/edit?usp=sharing" className="cta-button">
                Hacker Pack
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Sponsors */}
      <div className="relative h-0 flex justify-center">
        <div className="absolute z-40 text-white max-w-screen-lg mx-auto glass -translate-y-1/2 grid grid-cols-1 md:grid-cols-4 items-center gap-12">
          {urls.map((url, i) => (
            <img src={url} alt="" />
          ))}
        </div>
      </div>
      {/* Track 1 */}
      <section className="backdrop-blur-2xl border-y border-white/20 backdrop-brightness-50 section-thing">
        <img src={urls[0]} alt="" />
        <div className="border-card bg-black/50 w-[500px]">
          <h2 className="text-3xl font-bold">Solidity Track</h2>
          <p className="opacity-80 my-4">
            On Saturday November 5th, hackers will compete in a 1 hour solidity competition where they try to make the contract evaluate to true. Participants
            will be provided an in-person workshop and educational materials to help them prepare for the sprint. Problems increase in difficulty. May the best
            hacker win.
          </p>
          <a href="https://docs.google.com/document/d/1JoUTH5JFYXdkpcSWpToqJkPCANg2qmEvzMWVFyIy64I/edit?usp=sharing" className="button">
            Problem Details
          </a>
        </div>
      </section>
      {/* Track 2 */}
      <section className="section-thing">
        <div className="glass w-[500px]">
          <h2 className="text-3xl font-bold">Data Track</h2>
          <p className="opacity-80 my-4">
            Beginning October 26th, hackers will compete to build an ETH price prediction model using the ocean protocol SDK. Winner will be decided by taking
            the NMSE of the predicted price versus actual price over a 24 1-hour intervals.
          </p>
          <DifficultySlider num={2} title="Test" />
          <a href="https://docs.google.com/document/d/17xHAAFSGQvqFVjnnMepil4Jwwq2iCHX2RQSQ3SnozX0/edit?usp=sharing" className="button">
            Problem Details
          </a>
        </div>
      </section>
      {/* Track 3 */}
      <section className="backdrop-blur-2xl border-y border-white/20 section-thing">
        <img src={urls[0]} alt="" />
        <div className="border-card bg-black/50 w-[500px]">
          <h2 className="text-3xl font-bold">Security Track</h2>
          <p className="opacity-80 my-4">
            Hackers will leverage Forta&apos;s SDK to build detection bots. Detection bots digest blockchain data to detect some condition and can make network
            calls to other APIs to combine richer data sources
          </p>
          <a href="https://docs.google.com/document/d/1JoUTH5JFYXdkpcSWpToqJkPCANg2qmEvzMWVFyIy64I/edit?usp=sharing" className="button">
            Problem Details
          </a>
        </div>
      </section>
      <section className="w-full backdrop-blur-lg bg-black/50 p-10 border-t border-white/20 text-white">
        <div className="max-w-screen-xl mx-auto">this is a test</div>
      </section>
    </>
  )
}

function DifficultySlider({ num, title }) {
  const max = 4
  return (
    <div className="flex gap-x-1 items-center">
      <p className="mr-2 font-mono">{title}</p>
      {new Array(max).fill(0).map((_, i) => {
        return <div className={`rounded-full w-2 h-2 border border-white/90 ${i < num ? 'bg-white' : ''}`}></div>
      })}
    </div>
  )
}

const getDevicePixelRatio = (maxDpr = 2) =>
  typeof window !== 'undefined' ? Math.min(Math.max(Math.round(window.devicePixelRatio), 1), maxDpr).toFixed(1) : '1.0'

ReactDOM.render(<App />, document.getElementById('root'))

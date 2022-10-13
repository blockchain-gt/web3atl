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
  const hasMounted = useHasMounted()

  const extra = `transition-all ease-out duration-1000 delay-1000 ${hasMounted ? '' : 'opacity-0 translate-y-4'}`
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
      <section className=" text-white z-20 flex max-w-screen-2xl mx-auto justify-end items-center min-h-screen">
        <div className="max-w-[600px]">
          <h3 className={`text-3xl font-extrabold  transition-all duration-1000 ease-out ${hasMounted ? 'opacity-75' : 'opacity-0 translate-y-4'}`}>Web3ATL</h3>
          <h1
            className={`text-8xl font-black drop-shadow-2xl transition-all duration-1000 delay-500 ease-out font-mono ${
              hasMounted ? '' : 'opacity-0 translate-y-4'
            }`}>
            Hackathon.
          </h1>
          <p className={`${extra} mb-3 text-gray-400 drop-shadow`}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta tempore perspiciatis id similique, laudantium non in veritatis a suscipit pariatur
            voluptates doloremque corporis rerum voluptatibus adipisci ut placeat facilis amet.
          </p>
          <div className={`flex text-blue-400 font-bold uppercase ${extra}`}>
            <p className="">Oct 26 - Nov 6</p>
          </div>
        </div>
      </section>
      <div className=" text-white max-w-screen-lg mx-auto glass -translate-y-1/2 grid grid-cols-1 md:grid-cols-4">test</div>
      <section className="max-w-screen-lg mx-auto text-white items-center justify-end h-screen flex">
        <div className="glass w-[500px]">
          <h2 className="text-3xl font-bold">Lorem Ipsum</h2>
          <p className="opacity-80 my-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero sit officia tenetur, omnis ullam deleniti numquam enim odio harum delectus corporis
            voluptatem, explicabo quam, iusto et! Delectus repellendus dolorem similique.
          </p>
          <a href="" className="button">
            View Schedule
          </a>
        </div>
      </section>
      <section className="max-w-screen-lg mx-auto text-white items-center justify-start h-screen flex">
        <div className="glass w-[500px]">
          <h2 className="text-3xl font-bold">Lorem Ipsum</h2>
          <p className="opacity-80 my-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero sit officia tenetur, omnis ullam deleniti numquam enim odio harum delectus corporis
            voluptatem, explicabo quam, iusto et! Delectus repellendus dolorem similique.
          </p>
          <a href="" className="button">
            View Schedule
          </a>
        </div>
      </section>
    </>
  )
}

const getDevicePixelRatio = (maxDpr = 2) =>
  typeof window !== 'undefined' ? Math.min(Math.max(Math.round(window.devicePixelRatio), 1), maxDpr).toFixed(1) : '1.0'

ReactDOM.render(<App />, document.getElementById('root'))

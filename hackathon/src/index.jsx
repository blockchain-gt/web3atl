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
      <div style={{ height: '100vh' }} className="fixed w-full">
        <Canvas gl={{ autoClear: false }} pixelRatio={getDevicePixelRatio(1)}>
          <MetaballSwarm />
          <Suspense fallback={null}>
            <Effects />
          </Suspense>
        </Canvas>
      </div>
      <div className="relative text-white z-20 flex justify-end items-center min-h-screen p-8">
        <div className="max-w-[800px]">
          <h3 className={`text-3xl font-extrabold opacity-75 transition-all duration-1000 ease-out ${hasMounted ? '' : 'opacity-0 translate-y-4'}`}>Web3ATL</h3>
          <h1 className={`text-8xl font-black drop-shadow-2xl transition-all duration-1000 delay-500 ease-out ${hasMounted ? '' : 'opacity-0 translate-y-4'}`}>
            Hackathon.
          </h1>
          <div className={`flex text-blue-400 font-bold uppercase ${extra}`}>
            <p className="">Oct 26 - Nov 6</p>
          </div>
        </div>
        <div>test</div>
      </div>
    </>
  )
}

const getDevicePixelRatio = (maxDpr = 2) =>
  typeof window !== 'undefined' ? Math.min(Math.max(Math.round(window.devicePixelRatio), 1), maxDpr).toFixed(1) : '1.0'

ReactDOM.render(<App />, document.getElementById('root'))

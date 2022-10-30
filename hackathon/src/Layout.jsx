import React, { Suspense } from 'react'
import { Outlet } from "react-router-dom";
import Effects from './Effects'
import MetaballSwarm from './MetaballSwarm/MetaballSwarm'
import { getDevicePixelRatio } from "./utils"
import { Canvas } from 'react-three-fiber'

export function Layout() {
    return (
      <>
        <meta
          property="og:image"
          content="https://cdn.raster.app/blockchain-at-georgia-tech/Sb4iAtiu4B?ixlib=js-3.6.0&amp;s=ef4c765f8a020ebbb89567b2d2d73076"></meta>
        <div style={{ height: '100vh' }} className="fixed w-full pointer-events-none">
          <Canvas gl={{ autoClear: false }} pixelRatio={getDevicePixelRatio(1)}>
            <MetaballSwarm />
            <Suspense fallback={null}>
              <Effects />
            </Suspense>
          </Canvas>
        </div>
  
        <Outlet/>
      </>
    )
  }
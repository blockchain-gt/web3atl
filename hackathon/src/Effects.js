import React, { useRef, useMemo, useEffect } from 'react'
import * as THREE from 'three'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass'
// import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader'
import { extend, useThree, useFrame } from 'react-three-fiber'

// extend({ EffectComposer, RenderPass, ShaderPass, UnrealBloomPass, FXAAShader })
extend({ EffectComposer, RenderPass, ShaderPass, UnrealBloomPass })

const Effects = () => {
  const { gl, scene, camera, size } = useThree()
  const composer = useRef()

  const aspect = useMemo(() => new THREE.Vector2(size.width, size.height), [size])

  useEffect(() => void composer.current.setSize(size.width, size.height), [size])

  useFrame(() => composer.current.render(), 1)

  return (
    <effectComposer ref={composer} args={[gl]}>
      <renderPass attachArray="passes" args={[scene, camera]} />
      <unrealBloomPass attachArray="passes" args={[aspect, 2, 1, 0]} />
    </effectComposer>
  )
}

export default Effects

import React, { useRef, useMemo, useState, useEffect } from 'react'
import { useFrame, useThree } from 'react-three-fiber'
import { Object3D, Vector2, Vector3 } from 'three'

import CreateMetaballMaterial from './MetaballMaterial'

const MetaballSwarm = () => {
  const { gl, size } = useThree()
  const pixelRatio = gl.getPixelRatio()
  const width = size.width * pixelRatio
  const height = size.height * pixelRatio
  const mesh = useRef()

  let metaballCount = 15

  const [percentRed, setPercentRed] = useState(0)

  useEffect(() => {
    const handleScroll = (e) => {
      const scroll = e.target.scrollTop
      console.log(scroll)
      setPercentRed(scroll / e.target.scrollHeight)
    }

    document.getElementById('root').addEventListener('scroll', handleScroll)

    return () => {
      document.getElementById('root').removeEventListener('scroll', handleScroll)
    }
  }, [])

  const metaballUniforms = useMemo(() => new Array(metaballCount).fill().map(() => new Vector3()), [metaballCount])
  const resolution = useMemo(() => new Vector2(width, height), [height, width])

  // CREATE METABALL OBJECTS
  const metaballs = useMemo(() => {
    const temp = []
    for (let i = 0; i < metaballCount; i++) {
      temp[i] = new Object3D()
      temp[i].userData = {
        radius: 45 * pixelRatio,
        speed: 0.01
      }
    }
    return temp
  }, [metaballCount, pixelRatio])

  const metaballMaterial = useMemo(() => CreateMetaballMaterial(metaballCount), [metaballCount])
  const [mousePos, setMousePos] = useState(new Vector2(0, 0))

  useEffect(() => {
    const onMouseMove = (e) => {
      setMousePos(new Vector2(e.clientX - window.innerWidth / 2, e.clientY - window.innerHeight / 2))
    }
    window.addEventListener('mousemove', onMouseMove)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  useFrame(() => {
    const metaballTarget = {
      x: mousePos.x,
      y: mousePos.y
    }

    metaballs.forEach((metaball, i) => {
      const { speed, radius } = metaball.userData
      const distX = metaballTarget.x - metaball.position.x
      const distY = metaballTarget.y - metaball.position.y

      metaball.position.y += distY * speed
      metaball.position.x += distX * speed

      const diffs = 0.3
      metaballTarget.x = diffs * metaball.position.x + (1 - diffs) * metaballTarget.x
      metaballTarget.y = diffs * metaball.position.y + (1 - diffs) * metaballTarget.y
      metaballUniforms[i].set(metaball.position.x, metaball.position.y, radius)
    })
  })

  return (
    <mesh ref={mesh}>
      <planeBufferGeometry attach="geometry" args={[width, height, 1, 1]} />
      <shaderMaterial
        attach="material"
        uniforms-red-value={percentRed}
        uniforms-metaballs-value={metaballUniforms}
        uniforms-resolution-value={resolution}
        args={[metaballMaterial]}
      />
    </mesh>
  )
}

export default MetaballSwarm

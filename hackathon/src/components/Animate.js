import React, { useState, useLayoutEffect, useEffect } from 'react'
import usePrevious from './usePrevious'

const calculateBoundingBoxes = (children) => {
  const boundingBoxes = {}

  React.Children.forEach(children, (child) => {
    const domNode = child.ref.current
    if (!domNode) return
    const nodeBoundingBox = domNode.getBoundingClientRect()

    boundingBoxes[child.key] = nodeBoundingBox
  })

  return boundingBoxes
}

const AnimateBubbles = ({ children }) => {
  const [boundingBox, setBoundingBox] = useState({})
  const [prevBoundingBox, setPrevBoundingBox] = useState({})
  const prevChildren = usePrevious(children)

  useLayoutEffect(() => {
    const newBoundingBox = calculateBoundingBoxes(children)
    setBoundingBox(newBoundingBox)
  }, [children])

  useLayoutEffect(() => {
    const prevBoundingBox = calculateBoundingBoxes(prevChildren)
    setPrevBoundingBox(prevBoundingBox)
  }, [prevChildren])

  useEffect(() => {
    const hasPrevBoundingBox = Object.keys(prevBoundingBox).length

    if (hasPrevBoundingBox) {
      React.Children.forEach(children, (child) => {
        const domNode = child.ref.current
        const firstBox = prevBoundingBox[child.key]
        const lastBox = boundingBox[child.key]
        const changeInX = firstBox.left - lastBox.left

        if (changeInX) {
          requestAnimationFrame(() => {
            // Before the DOM paints, invert child to old position
            domNode.style.transform = `translateX(${changeInX}px)`
            domNode.style.transition = 'transform 0s'

            requestAnimationFrame(() => {
              // After the previous frame, remove
              // the transistion to play the animation
              domNode.style.transform = ''
              domNode.style.transition = 'transform 500ms'
            })
          })
        }
      })
    }
  }, [boundingBox, prevBoundingBox, children])

  return children
}

export default AnimateBubbles

import { useState, useEffect } from 'react'

export const getDevicePixelRatio = (maxDpr = 2) =>
typeof window !== 'undefined' ? Math.min(Math.max(Math.round(window.devicePixelRatio), 1), maxDpr).toFixed(1) : '1.0'

export const useHasMounted = (ms) => {
    const [hasMounted, setHasMounted] = useState(false)
    useEffect(() => {
      setTimeout(() => {
        setHasMounted(true)
      }, ms)
    }, [])
    return hasMounted
  }
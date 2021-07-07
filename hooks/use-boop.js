import { useState, useEffect, useCallback } from 'react'
import { useSpring } from 'react-spring'

const useBoop = ({
  x = 0,
  y = 0,
  scale = 1,
  rotate = 0,
  timing = 150,
  spring = {
    tension: 300,
    friction: 10
  }
}) => {
  const [isBooped, setIsBooped] = useState(false)

  useEffect(() => {
    if (!isBooped) {
      return
    }

    const timeout = window.setTimeout(() => {
      setIsBooped(false)
    }, timing)

    return () => {
      window.clearTimeout(timeout)
    }
  }, [isBooped])

  const trigger = useCallback(() => {
    setIsBooped(true)
  }, [])

  const style = useSpring({
    display: 'flex',
    backfaceVisibility: 'hidden',
    willChange: 'transform',
    transform: isBooped
      ? `translate(${x}px, ${y}px) scale(${scale}) rotate(${rotate}deg)`
      : 'translate(0px, 0px) scale(1) rotate(0deg)',
    transformOrigin: 'center',
    config: spring
  })

  return [style, trigger]
}

export default useBoop

import { useState, useEffect } from 'react'
import { useSpring, animated } from 'react-spring'

const Hello = ({}) => {
  const [flip, setFlip] = useState(false)
  const [counter, setCounter] = useState(0)
  const [cancel, setCancel] = useState(false)

  useEffect(() => {
    if (cancel) return

    if (flip) setCounter(counter + 1)

    if (counter > 1) {
      setCancel(true)
      setCounter(0)

      setTimeout(() => setCancel(false), 5000)
    }
  }, [flip])

  const style = useSpring({
    reverse: flip,
    onRest: () => setFlip(!flip),
    cancel: cancel,
    config: {
      tension: 300,
      friction: 10,
      duration: 200
    },
    from: { rotateZ: 0 },
    to: { rotateZ: 60 }
  })

  return (
    <animated.span
      style={{
        display: 'inline-flex',
        backfaceVisibility: 'hidden',
        willChange: 'transform',
        ...style
      }}
    >
      👋🏻
    </animated.span>
  )
}

export default Hello

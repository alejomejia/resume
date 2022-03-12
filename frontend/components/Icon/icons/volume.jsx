import { useContext } from 'react'
import { store } from 'context/store'
import { useSpring, animated } from 'react-spring'

const IconVolume = () => {
  const { isSoundEnable } = useContext(store)

  const inside = useSpring({
    opacity: isSoundEnable ? 1 : 0,
    delay: isSoundEnable ? 0 : 150
  })

  const outside = useSpring({
    opacity: isSoundEnable ? 1 : 0,
    delay: isSoundEnable ? 150 : 0
  })

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      <path
        id="horn"
        d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217z"
      />
      <animated.g style={outside}>
        <path
          id="outside"
          d="M15.364 2.636a1 1 0 00-.707 1.707A7.97 7.97 0 0117 10a7.972 7.972 0 01-2.343 5.657 1 1 0 001.414 1.414A9.972 9.972 0 0019 10a9.973 9.973 0 00-2.929-7.071 1 1 0 00-.707-.293z"
        />
      </animated.g>
      <animated.g style={inside}>
        <path
          id="inside"
          d="M12.153 5.54a1 1 0 00-.325 1.632A3.982 3.982 0 0113 10a3.984 3.984 0 01-1.172 2.828 1 1 0 001.415 1.415A5.984 5.984 0 0015 10a5.984 5.984 0 00-1.757-4.243 1 1 0 00-1.09-.217z"
        />
      </animated.g>
    </svg>
  )
}

export default IconVolume

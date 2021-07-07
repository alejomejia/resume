import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Skeleton from '../../Skeleton'

const SkeletonSkills = ({ pills }) => {
  const [pillsWidth, setPillsWidth] = useState([])

  // Set a value between 40 and 140 for the Skeleton pills
  const setRandomWidth = () => {
    let randomNumbers = []

    for (let i = 0; i <= pills; i++) {
      const randomNumber = Math.floor(Math.random() * (40 - 140 + 1)) + 140
      randomNumbers.push(randomNumber)
    }

    return setPillsWidth(randomNumbers)
  }

  useEffect(() => setRandomWidth(), [])

  return (
    <>
      {Array.from({ length: pills }, (item, k) => (
        <Skeleton key={k} width={pillsWidth[k]} />
      ))}
    </>
  )
}

SkeletonSkills.propTypes = {
  pills: PropTypes.number.isRequired
}

export default SkeletonSkills

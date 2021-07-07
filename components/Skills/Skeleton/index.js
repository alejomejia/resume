import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Skeleton from '../../Skeleton'

const SkeletonSkills = ({ pills }) => {
  const [pillsWidth, setPillsWidth] = useState([])

  const setRandomWidth = () => {
    let randomNumbers = []

    for (let i = 0; i <= pills; i++) {
      // Set a value between 40 and 140 for the Skeleton pills
      const randomNumber = Math.floor(Math.random() * (40 - 140 + 1)) + 140
      randomNumbers.push(randomNumber)
    }

    return setPillsWidth(randomNumbers)
  }

  useEffect(() => setRandomWidth(), [])

  return (
    <>
      {Array.from({ length: pills }, (item, k) => (
        <Skeleton key={k} width={`${pillsWidth[k]}px`} />
      ))}
    </>
  )
}

SkeletonSkills.propTypes = {
  pills: PropTypes.number.isRequired
}

export default SkeletonSkills

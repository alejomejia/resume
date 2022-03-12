import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Skeleton from 'components/Skeleton'

const SkeletonEducation = ({ items }) => {
  const [itemsWidth, setItemsWidth] = useState([])

  const setRandomWidth = () => {
    let randomNumbers = []

    for (let i = 0; i <= items; i++) {
      // Set a value between 400 and 190 for the Skeleton pills
      const randomNumber = Math.floor(Math.random() * (400 - 190 + 1)) + 190
      randomNumbers.push(randomNumber)
    }

    return setItemsWidth(randomNumbers)
  }

  useEffect(() => setRandomWidth(), [])

  return (
    <>
      {Array.from({ length: items }, (item, k) => (
        <Skeleton key={k} width={`${itemsWidth[k]}px`} height="18px" />
      ))}
    </>
  )
}

SkeletonEducation.propTypes = {
  items: PropTypes.number.isRequired
}

export default SkeletonEducation

import Flex from '../../Flex'
import Skeleton from '../../Skeleton'

const SkeletonExperience = () => {
  return (
    <Flex gap="20px" wrap="wrap">
      {Array.from({ length: 3 }, (item, k) => (
        <Skeleton key={k} width="100%" height="180px" />
      ))}
    </Flex>
  )
}

export default SkeletonExperience

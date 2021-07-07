import Box from '../../Box'
import Flex from '../../Flex'
import Skeleton from '../../Skeleton'

const SkeletonRecommendations = () => {
  return (
    <Box mb="12px">
      <Flex gap="20px" wrap="wrap">
        {Array.from({ length: 3 }, (item, k) => (
          <Skeleton key={k} width="100%" height="180px" />
        ))}
      </Flex>
    </Box>
  )
}

export default SkeletonRecommendations

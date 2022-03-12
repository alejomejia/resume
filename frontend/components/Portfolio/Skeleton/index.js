import Skeleton from 'components/Skeleton'

const SkeletonPortfolio = () => {
  return (
    <>
      {Array.from({ length: 4 }, (item, k) => (
        <Skeleton key={k} width="100%" height="240px" />
      ))}
    </>
  )
}

export default SkeletonPortfolio

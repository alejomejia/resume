import { useContext } from 'react'
import PropTypes from 'prop-types'
import useSound from 'use-sound'

import { store } from 'context/store'
import * as gtag from 'lib/gtag'

import Icon from 'components/Icon'
import Boop from 'components/Boop'

import * as S from './styled'

const PortfolioItem = ({ title, stack, image, external }) => {
  const combinedStack = stack.join(', ')
  const { isSoundEnable } = useContext(store)

  const [popEnter] = useSound('/sounds/pop.mp3', {
    playbackRate: 0.9,
    volume: 0.5,
    soundEnabled: isSoundEnable
  })

  const [popClick] = useSound('/sounds/pop.mp3', {
    volume: 0.5,
    soundEnabled: isSoundEnable
  })

  const handleOnEnter = () => popEnter()

  const handleOnClick = (e) => {
    popClick()

    const getType = e.currentTarget.dataset.type
    const iconList = {
      code: 'repository',
      globe: 'website',
      storybook: 'storybook'
    }

    const icon = iconList[getType]
    gtag.event({ action: `portfolio_${icon}`, category: 'portfolio' })
  }

  const buttonIcons = {
    repo: 'code',
    site: 'globe',
    storybook: 'storybook'
  }

  return (
    <S.Wrapper $image={image}>
      <S.Container>
        <S.Content>
          <S.Title>{title}</S.Title>
          <S.Stack>{combinedStack}</S.Stack>
        </S.Content>
        <S.ButtonsWrapper>
          {external.map((item) => {
            const iconName = buttonIcons[item.type]

            return (
              <Boop key={item.id} config={{ scale: 0.95 }}>
                <S.Button
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={handleOnEnter}
                  onClick={handleOnClick}
                  data-type={iconName}
                >
                  <Icon name={iconName} width={24} />
                </S.Button>
              </Boop>
            )
          })}
        </S.ButtonsWrapper>
      </S.Container>
      <S.Gradient />
      <S.Blur />
    </S.Wrapper>
  )
}

PortfolioItem.propTypes = {
  title: PropTypes.string.isRequired,
  stack: PropTypes.arrayOf(PropTypes.string).isRequired,
  image: PropTypes.string.isRequired,
  external: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.oneOf(['repo', 'site', 'storybook']).isRequired,
      link: PropTypes.string.isRequired
    })
  ).isRequired
}

export default PortfolioItem

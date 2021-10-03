import * as gtag from 'lib/gtag'

import Flex from 'components/Flex'
import Icon from 'components/Icon'

import Hello from './Hello'
import ArtCenter from './Art/Center'
import ArtSpinner from './Art/Spinner'

import * as S from './styled'

const Intro = () => {
  const gtagEventEmail = () => {
    gtag.event({ action: 'send_email', category: 'link' })
  }

  return (
    <S.Wrapper>
      <S.Content>
        <S.HelloWrapper>
          <Hello />
        </S.HelloWrapper>
        <S.Preffix>My name is</S.Preffix>
        <S.Name>Alejandro Mejía</S.Name>
        <S.JobTitle>UX UI Developer</S.JobTitle>
        <S.Location>From Medellin, CO 🇨🇴</S.Location>
        <div>
          <S.Link
            href="mailto:alejomejiacuartas@outlook.com"
            onClick={gtagEventEmail}
          >
            <Flex>
              <Icon name="mail" fill="#fff" />
            </Flex>
            <S.Email>alejomejiacuartas@outlook.com</S.Email>
          </S.Link>
        </div>
      </S.Content>
      <S.Art>
        <S.Art1>
          <ArtCenter />
        </S.Art1>
        <S.Art2>
          <ArtSpinner />
        </S.Art2>
      </S.Art>
    </S.Wrapper>
  )
}

export default Intro

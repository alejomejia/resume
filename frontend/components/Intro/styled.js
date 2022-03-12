import styled from 'styled-components'

export const Wrapper = styled.div`
  overflow: hidden;
  position: relative;
  min-height: 480px;
  color: var(--color-white);
  background-color: var(--color-art-bg);
  border-radius: ${({ theme }) => theme.spacing(1)};
  // Safari fix for rounded borders
  transform: translateZ(0);

  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    border-radius: 0;
    min-height: 355px;
    text-align: center;
  }

  margin-top: ${({ theme }) => theme.spacing(5)};
  margin-bottom: ${({ theme }) => theme.spacing(6)};

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    margin-top: ${({ theme }) => theme.spacing(3)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    margin-top: 0;
    margin-bottom: ${({ theme }) => theme.spacing(4)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xxs}) {
    margin-bottom: ${({ theme }) => theme.spacing(3)};
  }
`

export const Content = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: ${({ theme }) => theme.spacing(6)};
  z-index: 10;

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    padding: ${({ theme }) => theme.spacing(4)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.l}) {
    padding: ${({ theme }) => theme.spacing(3)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    padding: ${({ theme }) => theme.spacing(4)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xxs}) {
    padding: ${({ theme }) => theme.spacing(3)};
  }
`

export const HelloWrapper = styled.span`
  font-size: 48px;
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`

export const Preffix = styled.span`
  font-size: ${({ theme }) => theme.fonts.size.xxl};
  font-weight: ${({ theme }) => theme.fonts.weight.light};
  line-height: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.l}) {
    font-size: ${({ theme }) => theme.fonts.size.xl};
    line-height: 1.2;
  }
`

export const Name = styled.h1`
  color: var(--color-white);
  font-size: ${({ theme }) => theme.fonts.size.xxxl};
  margin-bottom: ${({ theme }) => theme.spacing(2)};

  @media (max-width: ${({ theme }) => theme.breakpoints.l}) {
    font-size: ${({ theme }) => theme.fonts.size.xxl};
  }
`

export const JobTitle = styled.h2`
  font-size: ${({ theme }) => theme.fonts.size.l};
  font-family: ${({ theme }) => theme.fonts.family.secondary};
  font-weight: ${({ theme }) => theme.fonts.weight.light};
`

export const Location = styled(JobTitle)``

export const Link = styled.a`
  display: flex;
  align-items: center;
  color: var(--color-white);
  margin-top: ${({ theme }) => theme.spacing(7)};

  @media (max-width: ${({ theme }) => theme.breakpoints.l}) {
    font-size: ${({ theme }) => theme.fonts.size.sm};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    font-size: ${({ theme }) => theme.fonts.size.default};
    margin-top: ${({ theme }) => theme.spacing(5)};
    justify-content: center;
  }
`

export const Email = styled.span`
  display: inline-block;
  margin-left: ${({ theme }) => theme.spacing(1)};
`

export const Art = styled.div`
  position: absolute;
  inset: 0;
  z-index: 5;
  filter: blur(60px);
  will-change: transform;
  animation: scale 10s ease infinite alternate;

  @keyframes scale {
    0% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1.2);
    }
  }
`

export const Art1 = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  will-change: transform;
`

export const Art2 = styled.div`
  transform: translateY(60px) scale(1.3);

  & svg {
    animation: spin 20s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`

import styled from 'styled-components'

import { Wrapper as AboutWrapper } from '../About/styled'
import { Wrapper as EducationWrapper } from '../Education/styled'

export const Component = styled.h1`
  display: flex;
  align-items: center;
  margin-bottom: ${(props) => props.mb};

  .heading {
    &__icon {
      display: inline-flex;
      margin-right: ${({ theme }) => theme.spacing(1)};
    }

    &__title {
      color: ${(props) =>
        props.color ? props.color : 'var(--color-text-300)'};
      font-size: ${(props) =>
        props.size ? props.size : props.theme.fonts.size.xl};
      font-family: ${({ theme, family }) => theme.fonts.family[family]};
      font-weight: ${(props) =>
        props.weight ? props.weight : props.theme.fonts.weight.bold};
      font-style: ${(props) => (props.isItalic ? 'italic' : '')};
    }
  }

  // In specific sections
  ${AboutWrapper} & .heading__title,
  ${EducationWrapper} & .heading__title {
    @media (max-width: ${({ theme }) => theme.breakpoints.xxs}) {
      font-size: ${({ theme }) => theme.fonts.size.l};
    }
  }
`

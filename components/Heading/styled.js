import styled from 'styled-components'

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
        props.color ? props.color : props.theme.colors.text300};
      font-size: ${(props) =>
        props.size ? props.size : props.theme.fonts.size.xl};
      font-weight: ${(props) =>
        props.weight ? props.weight : props.theme.fonts.weight.bold};
      font-style: ${(props) => (props.isItalic ? 'italic' : '')};
    }
  }
`

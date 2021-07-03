import styled from 'styled-components'

export const Component = styled.article`
  position: relative;
  min-height: 260px;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  overflow: hidden;

  &.portfolio-item {
    & > div:first-child {
      position: relative;
      z-index: 10;
    }

    &:hover {
      .portfolio__blur {
        backdrop-filter: blur(0);
      }
    }
  }

  .portfolio-item {
    &__container {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      min-height: 100%;
      padding: ${({ theme }) => theme.spacing(3)};
    }

    &__buttons {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
  }

  .portfolio {
    &__content {
      padding-right: ${({ theme }) => theme.spacing(2)};
      color: ${({ theme }) => theme.palette.white};
    }

    &__title {
      font-size: ${({ theme }) => theme.fonts.size.m};
    }

    &__stack {
      font-size: ${({ theme }) => theme.fonts.size.sm};
    }

    &__button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      opacity: 0.6;
      background-color: ${({ theme }) => theme.palette.white};
      border-radius: 8px;
      transition: opacity 0.35s ease;

      &:hover {
        opacity: 1;
      }
    }

    &__gradient,
    &__blur {
      position: absolute;
      inset: 0;
    }

    &__gradient {
      background: linear-gradient(0deg, rgba(21, 21, 21, 0.85), transparent);
      z-index: 5;
    }

    &__blur {
      z-index: 1;
      backdrop-filter: blur(4px);
      transition: backdrop-filter 0.35s ease;
    }
  }
`

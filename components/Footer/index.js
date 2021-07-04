import { Component } from './styled'

const Footer = () => {
  return (
    <Component className="footer">
      <div className="footer__top">
        <span className="footer__text">
          Not convinced yet?{' '}
          <a className="footer__link" href="tel:+573192160752">
            Let's talk
          </a>{' '}
          ⚡
        </span>
      </div>
      <div className="footer__bottom">
        <span>Made with NextJS and Styled Components 💙</span>
      </div>
    </Component>
  )
}

export default Footer

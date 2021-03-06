const general = {
  fonts: {
    size: {
      xxxl: '2.25rem', // 36px
      xxl: '1.75rem', // 28px
      xl: '1.5rem', // 24px
      l: '1.25rem', // 20px
      m: '1.125rem', // 18px
      default: '1rem', // 16px
      sm: '0.875rem' // 14px
    },
    family: {
      primary: 'Chivo, Verdana, sans-serif',
      secondary: 'Poppins, Verdana, sans-serif'
    },
    weight: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700
    }
  },
  breakpoints: {
    xl: '1440px',
    l: '1200px',
    m: '1024px',
    s: '768px',
    xs: '550px',
    xxs: '420px'
  },
  spacing(val) {
    return `${val * 8}px`
  }
}

export default general

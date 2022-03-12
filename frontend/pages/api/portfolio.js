export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      title: 'Google Clone',
      stack: ['NextJS', 'TailwindCSS'],
      image: '/portfolio/google-clone.png',
      external: [
        {
          id: 1,
          type: 'repo',
          link: 'https://github.com/alejomejia/google-clone'
        },
        {
          id: 2,
          type: 'site',
          link: 'https://alejomejia-google-clone.vercel.app/'
        }
      ]
    },
    {
      id: 2,
      title: 'Bimbau Design System',
      stack: ['ReactJS', 'Storybook', 'Styled Components'],
      image: '/portfolio/bimbau-design-system.png',
      external: [
        {
          id: 1,
          type: 'site',
          link: 'https://development.bimbau.co/login'
        },
        {
          id: 2,
          type: 'storybook',
          link: 'http://sb.alejandromejia.co/'
        }
      ]
    },
    {
      id: 3,
      title: 'Social Media Dashboard',
      stack: ['ReactJS', 'Styled Components', 'React Spring'],
      image: '/portfolio/social-media-dashboard.png',
      external: [
        {
          id: 1,
          type: 'repo',
          link: 'https://github.com/alejomejia/social-media-dashboard'
        },
        {
          id: 2,
          type: 'site',
          link: 'https://alejomejia.github.io/social-media-dashboard/'
        }
      ]
    }
  ])
}

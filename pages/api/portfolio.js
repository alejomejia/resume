export default function handler(req, res) {
  res.status(200).json([
    {
      id: 4,
      title: 'Superunion Website',
      stack: ['NextJS', 'TS', 'Framer Motion', 'Strapi', 'GraphQL'],
      image: '/portfolio/superunion.png',
      external: [
        {
          id: 1,
          type: 'site',
          link: 'https://www.superunion.com/'
        }
      ]
    },
    {
      id: 5,
      title: 'Retrospectiva WebApp',
      stack: ['NextJS', 'TS', 'Headless WordPress'],
      image: '/portfolio/retrospectiva.png',
      external: [
        {
          id: 1,
          type: 'site',
          link: 'https://app.retrospectiva.com.co/'
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
          link: 'https://www.bimbau.co/'
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

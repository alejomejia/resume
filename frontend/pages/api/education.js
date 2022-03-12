export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      name: 'MERN Fullstack Bootcamp',
      at: 'FullstackOpen',
      link: 'https://fullstackopen.com/en/'
    },
    {
      id: 2,
      name: 'React: The complete guide',
      at: 'Udemy',
      link: 'https://www.udemy.com/'
    },
    {
      id: 3,
      name: 'Google Analytics & SEO',
      at: 'GeekBoss',
      link: 'https://geekboss.co/'
    },
    {
      id: 4,
      name: 'Git and Github',
      at: 'Platzi',
      link: 'https://platzi.com/'
    },
    {
      id: 5,
      name: 'User Experience & User Interface Design',
      at: 'Platzi',
      link: 'https://platzi.com/'
    },
    {
      id: 6,
      name: 'Web Development',
      at: 'Platzi',
      link: 'https://platzi.com/'
    },
    {
      id: 7,
      name: 'Multimedia Production Technology',
      at: 'SENA',
      link: 'https://www.sena.edu.co/es-co/Paginas/default.aspx'
    }
  ])
}

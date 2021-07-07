export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      image: '/recommendations/emily-biondo.png',
      name: 'Emily Biondo',
      company: '10Pearls',
      link: 'https://10pearls.com/',
      title: 'UX UI Design Lead',
      description:
        'Alejandro is amazing at his job. He has an intuitive sensibility for UX and UI, and is a fantastic collaborator. Working with him was effortless—he was always responsive, always confident we could arrive at a solution, and always came through with effective, beautiful interfaces. I wish I could work with a thousand Alejandros.'
    },
    {
      id: 2,
      image: '/recommendations/dylan-donlon-moyer.png',
      name: 'Dylan Donlon-Moyer',
      company: '10Pearls',
      link: 'https://10pearls.com/',
      title: 'Product Delivery Manager',
      description:
        'Alejandro is an incredible UI/UX talent and an absolutely wonderful colleague to work with. He is responsive, friendly, and efficient in his duties, and is always eager to continue learning and improving the products he creates. He faithfully brings even the most complex designs to life and can always be counted on to build reliable and beautiful frameworks for any project. I would love to have Alejandro on all of my teams!'
    },
    {
      id: 3,
      image: '/recommendations/lili-franco.png',
      name: 'Lili Franco',
      company: 'Integ.ro',
      link: 'https://integ.ro/',
      title: 'Scrum Master',
      description:
        'Are you looking for a good team player? Then Alejo is definitely the right match. He is a great UI designer with a keen eye for details. He is always ready to help the team, ready to learn new things and ready for challenges. I worked with him for about one year and I would definitely repeat the experience.'
    }
  ])
}

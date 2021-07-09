export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      image: '/experience/freelance.png',
      title: 'Product Developer / Web Designer',
      at: 'Freelance',
      link: '/',
      startDate: 'January 2013',
      endDate: 'Today',
      description:
        'I help companies and startups to develop and maintain websites and design systems and their components in ReactJS and Storybook. Normally help to build the application layouts as well to make it responsive, and improve UX from UI development. In some cases I also do design job to help my clients build the entire product.'
    },
    {
      id: 2,
      image: '/experience/making-sense.png',
      title: 'SSR UX Developer',
      at: 'MakingSense',
      link: 'https://makingsense.com/',
      startDate: 'January 2021',
      endDate: 'Today',
      description:
        'Working 100% remotely with an Argentinian and USA team on a huge app for agricultural sector. Some of my duties are to maintain an entire Design System built with ReactJS and Storybook, add new components based on designs, refactor old code moving from JS classes to hooks and Typescript, SASS to Styled Components and improve responsive.'
    },
    {
      id: 3,
      image: '/experience/10pearls.png',
      title: 'UI Developer',
      at: '10Pearls',
      link: 'https://10pearls.com/',
      startDate: 'September 2019',
      endDate: 'December 2020',
      description:
        'I built the entire UI in ReactJS for an educational public project. I had to keep constant communication with the designers and product managers from USA to deliver the best product possible. I also communicated with the frontend team to deliver easy to use, scalable and maintainable components. Improved the UX adding extra UI functionalities, like Skeleton loading.'
    },
    {
      id: 4,
      image: '/experience/integro.png',
      title: 'UI Developer',
      at: 'Integ.ro',
      link: 'https://www.integ.ro/',
      startDate: 'July 2018',
      endDate: 'September 2019',
      description:
        'I was, from start to end, building an entire website for a prestigious university from my city. The customer send us the designs and I turn them to life coding it on WordPress. One of the biggest challenges was to make it fully accesible so I had to research a lot and learn about a11y implementation, testing and debugging.'
    }
  ])
}

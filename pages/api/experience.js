export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      image: '/experience/freelance.png',
      title: 'UX UI Developer / Web Designer',
      at: 'Freelance',
      link: '/',
      startDate: 'January 2013',
      endDate: 'Today',
      description:
        'I help companies and startups develop and mantain websites and design system components in ReactJS and Storybook. I build the application layouts, make it responsive and improve the user experience and user interface. In some cases I provide a full service by creating the designs as well.'
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
        'I work 100% remotely with an Argentinian and USA team on a large-scale app for the agricultural sector. Some of my duties are to mantain the entire design system built with ReactJS and Storybook, add new components based on designs, refactor old code moving from JS classes to hooks and Typescript, SASS to Styled Components and improve responsiveness.'
    },
    {
      id: 3,
      image: '/experience/10pearls.png',
      title: 'UX UI Developer',
      at: '10Pearls',
      link: 'https://10pearls.com/',
      startDate: 'September 2019',
      endDate: 'December 2020',
      description:
        'I built the entire UI library in ReactJS for an educational public project. I had to keep the constant communication with the designers and product managers from the USA team to deliver the best product possible. I also communicated with the frontend team to deliver easy to use, scalable and mantainable components. I improved the UX by adding extra UI functionalities like Skeleton loading.'
    },
    {
      id: 4,
      image: '/experience/integro.png',
      title: 'UX UI Developer',
      at: 'Integ.ro',
      link: 'https://www.integ.ro/',
      startDate: 'July 2018',
      endDate: 'September 2019',
      description:
        'I was, from start to finish, building an entire website for a prestigious university from my city. The client would send us the designs and I would bring it to life by coding it on WordPress. One of the biggest challenges was to make it fully accesible, so I had to research a lot and learn about a11y implementation, testing and debugging.'
    },
    {
      id: 5,
      image: '/experience/interficto.png',
      title: 'Web Lead',
      at: 'Interficto',
      link: 'https://interficto.com/',
      startDate: 'September 2015',
      endDate: 'June 2018',
      description:
        'My main task in this company was to make cool and goal centered websites in WordPress using templates with code modifications. My job position here was about communication with the company clients, cleaning WordPress virus from client websites, hosting maintenance, design and web development, team and client capacitations, sending mailchimp campaigns and many other tasks.'
    },
    {
      id: 6,
      image: '/experience/sigital.png',
      title: 'Production Director',
      at: 'Sigital',
      link: '#',
      startDate: 'January 2013',
      endDate: 'June 2015',
      description:
        'In this company I started as a web developer, then I was promoted to project manager and finally I worked as a production manager. A lot of teamwork here. My job was to watch the design and development area of the company. I used WordPress as CMS, documentation and process optimization, suppliers management, QA, website optimization to achieve goals and generate conversions and research of platforms to improve processes. Web design in overtime for projects.'
    }
  ])
}

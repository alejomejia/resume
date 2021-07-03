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
        'My work in this nice global company is to build interfaces inside ReactJS. I dont usually work with classes but with hooks. I use libraries like Material UI, Kendo UI and Styled Components. I work with scrum methodology and every day I communicate in English with the team and the client in the United States. I really love how the work in ReactJS can be organized and I always try to make all the components reusable and have all the files and code organized.'
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
        'My work in this nice global company is to build interfaces inside ReactJS. I dont usually work with classes but with hooks. I use libraries like Material UI, Kendo UI and Styled Components. I work with scrum methodology and every day I communicate in English with the team and the client in the United States. I really love how the work in ReactJS can be organized and I always try to make all the components reusable and have all the files and code organized.'
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
        'My work in this nice global company is to build interfaces inside ReactJS. I dont usually work with classes but with hooks. I use libraries like Material UI, Kendo UI and Styled Components. I work with scrum methodology and every day I communicate in English with the team and the client in the United States. I really love how the work in ReactJS can be organized and I always try to make all the components reusable and have all the files and code organized.'
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
        'My work in this nice global company is to build interfaces inside ReactJS. I dont usually work with classes but with hooks. I use libraries like Material UI, Kendo UI and Styled Components. I work with scrum methodology and every day I communicate in English with the team and the client in the United States. I really love how the work in ReactJS can be organized and I always try to make all the components reusable and have all the files and code organized.'
    }
  ])
}

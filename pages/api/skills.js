export default function handler(req, res) {
  res.status(200).json([
    {
      type: 'hard',
      skills: [
        {
          id: 1,
          name: 'ReactJS'
        },
        {
          id: 2,
          name: 'NextJS'
        },
        {
          id: 3,
          name: 'Storybook'
        },
        {
          id: 4,
          name: 'Design Systems'
        },
        {
          id: 5,
          name: 'HTML5'
        },
        {
          id: 6,
          name: 'CSS3'
        },
        {
          id: 7,
          name: 'Typescript'
        },
        {
          id: 8,
          name: 'TailwindCSS'
        },
        {
          id: 9,
          name: 'Styled Components'
        },
        {
          id: 10,
          name: 'SASS'
        },
        {
          id: 11,
          name: 'React Spring'
        },
        {
          id: 12,
          name: 'Prop Types'
        },
        {
          id: 13,
          name: 'Git'
        },
        {
          id: 14,
          name: 'Github'
        },
        {
          id: 15,
          name: 'Microinteractions'
        },
        {
          id: 16,
          name: 'Responsive'
        },
        {
          id: 17,
          name: 'Cross Browsing'
        },
        {
          id: 18,
          name: 'a11y'
        },
        {
          id: 19,
          name: 'Figma'
        },
        {
          id: 20,
          name: 'Sketch'
        },
        {
          id: 21,
          name: 'Adobe XD'
        }
      ]
    },
    {
      type: 'soft',
      skills: [
        {
          id: 1,
          name: 'Communication'
        },
        {
          id: 2,
          name: 'Teamwork'
        },
        {
          id: 3,
          name: 'Social Skills'
        },
        {
          id: 4,
          name: 'Proactivity'
        },
        {
          id: 5,
          name: 'Creativity'
        },
        {
          id: 6,
          name: 'Collaboration'
        },
        {
          id: 7,
          name: 'Organization'
        },
        {
          id: 8,
          name: 'Problem Solving'
        }
      ]
    }
  ])
}

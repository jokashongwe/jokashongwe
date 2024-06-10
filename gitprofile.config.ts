// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'jokashongwe', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/jokashongwe/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Mes Projets',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'TinoBusiness Hotel',
          description:
            'Système de réservation en ligne',
          imageUrl:
            'https://www.tinobusiness.net/assets/logo-ce3badf3.png',
          link: 'https://tinobusiness.net',
        },
        {
          title: 'GoodVibes Digital',
          description:
            'Système de Gestion évènementiels',
          imageUrl:
            'https://good-vibes.digital/public/images/logo.svg',
          link: 'https://good-vibes.digital',
        },
        {
          title: 'SMBStores',
          description:
            'E-Commerce Website build using the NEXT JS, Express and MongoDB. ',
          imageUrl:
            'https://www.smbstores.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-white.930b9577.png&w=256&q=75',
          link: 'https://www.smbstores.com',
        }
      ],
    },
  },
  seo: {
    title: 'Portfolio of Jonathan Kashongwe',
    description: 'Jonathan Kashongwe Resume',
    imageURL: '',
  },
  social: {
    linkedin: 'jonathan-kashongwe-m',
    twitter: 'jokashongwe',
    mastodon: 'jokashongwe@mastodon.social',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: 'jokashongwe',
    dev: 'jokashongwe',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://jokashongwe.com',
    phone: '',
    email: 'jokashongwe@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'Symfony',
    'JavaScript',
    'React.js',
    'Node.js',
    'Next.js',
    'MySQL',
    'Oracle',
    'Git',
    'Docker',
    'PHPUnit',
    'CSS',
    'Antd',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'TechFactory SAS',
      position: 'Founder',
      from: 'September 2023',
      to: 'Present',
      companyLink: 'https://example.com',
    },
    {
      company: '243 Technologies',
      position: 'Fullstack Developer',
      from: 'December 2022',
      to: 'Spetembre 2023',
      companyLink: 'https://243technologies.com',
    },
  ],
  certifications: [
    {
      name: 'Google Africa Developer',
      body: '6 Months Training with Andela',
      year: 'May 2020',
      link: 'https://example.com',
    },
  ],
  educations: [
    {
      institution: 'Université de Kinshasa',
      degree: 'Licence en Sciences Informatiques',
      from: '2014',
      to: '2020',
    }
  ],
  publications: [
    {
      title: 'Publication Title',
      conferenceName: '',
      journalName: 'Journal Name',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'Publication Title',
      conferenceName: 'Conference Name',
      journalName: '',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'jokashongwe', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'halloween'
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Jonathan Kashongwe 2024`,

  enablePWA: true,
};

export default CONFIG;

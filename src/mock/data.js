import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Yadhav K. Nundlall Portfolio', // e.g: 'Name | Developer'
  lang: 'Creole, English, French, Hindi', // e.g: en, es, fr, jp
  description: 'My Online Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'An IT polymath who is always up to explore the sea of technologies it has to offer.',
  name: 'Yadhav Kumar Nundlall',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Logical problem solving has always appealed to me and this explains my interests in mathematics, programming and computing in general. I also enjoy reading about scientific and tech on the Internet',
  paragraphTwo: 'My geeky nature led me to pursue a Computer Science degree. Currently working as a DeVops and exploring the Open Source',
  paragraphThree: 'Linux servers, Open Source Software and Fast Prototyping are what I like the most.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'archi.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'grafana.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'git.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Email',
  email: 'yadhavk15@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/yadhav-kumar-nundlall-2b5203203/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/yadhavk15',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};

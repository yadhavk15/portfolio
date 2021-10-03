import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Yadhav K. Nundlall Portfolio', // e.g: 'Name | Developer'
  lang: 'Creole, English, French, Hindi', // e.g: en, es, fr, jp
  description: 'My Online Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'An computer polymath who is always up to explore the sea of technologies IT has to offer.',
  name: 'Yadhav Kumar Nundlall',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Logical problem solving has always appealed to me and this explains my interests in mathematics, programming and computing in general. I also enjoy reading about science and tech on the Internet',
  paragraphTwo: 'My geeky nature led me to pursue a Computer Science degree. Currently working as a DeVops and exploring the Open Source',
  paragraphThree: 'Linux servers, Open Source Software and Fast Prototyping are what I like the most.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'archi.jpeg',
    title: 'Online Research Assitant Agent',
    info: 'My Final Year Dissertation utilizing Google BERT Question Answering Algorithm, Web Scraping and NLP ',
    info2: 'Its main aim is to facilitate research work.',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'grafana.jpg',
    title: 'Agentless Monitoring Tool',
    info: 'A utility capable of monitoring the health of Linux servers with by simple means of SSH.',
    info2: 'it sends the metrics to InfluxDB which is then graphed in realtime in Grafana',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'git.jpg',
    title: 'Fun Projects',
    info: 'I have coded many tools during my course and intership which can be found in  my public Git repos.',
    info2: 'Some cool ones include a Slack Curl uploader and a deadlock detector for Linux servers',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'yadhavk15@gmail.com',
  email: '',
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

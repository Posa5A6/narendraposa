import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaNodeJs,
  FaPython,
  FaReact,
} from 'react-icons/fa';
import {
  SiCss3,
  SiDjango,
  SiFlask,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiTailwindcss,
} from 'react-icons/si';
import { TbApi, TbBrandGithubFilled, TbRocket, TbTerminal2 } from 'react-icons/tb';

export const roles = [
  'Full Stack Python Developer',
  'Django Developer',
  'React Developer',
  'REST API Engineer',
  'Software Engineer',
  'AI Enthusiast',
];

export const bootLines = [
  'Initializing Narendra OS...',
  'Loading Django Core...',
  'Connecting React Systems...',
  'REST API Services Activated...',
  'GitHub Intelligence Synced...',
  'TraceByte Developer Environment Online...',
  'AI Interface Activated...',
];

export const specializations = [
  'Django Backend Development',
  'REST API Architecture',
  'React Frontend Systems',
  'Full Stack Web Applications',
  'Database Management',
  'Cyberpunk UI Engineering',
  'Responsive UI/UX',
  'Modern Software Development',
];

export const experienceSignals = [
  'Django backend systems',
  'REST API integrations',
  'React frontend development',
  'scalable applications',
  'authentication systems',
  'deployment workflows',
  'debugging and optimization',
  'production environments',
];

export const skills = [
  { name: 'Python', level: 92, icon: FaPython },
  { name: 'Django', level: 90, icon: SiDjango },
  { name: 'React.js', level: 91, icon: FaReact },
  { name: 'REST APIs', level: 89, icon: TbApi },
  { name: 'JavaScript', level: 87, icon: SiJavascript },
  { name: 'HTML5', level: 92, icon: SiHtml5 },
  { name: 'CSS3', level: 90, icon: SiCss3 },
  { name: 'Tailwind CSS', level: 92, icon: SiTailwindcss },
  { name: 'MySQL', level: 84, icon: SiMysql },
  { name: 'MongoDB', level: 78, icon: SiMongodb },
  { name: 'GitHub', level: 86, icon: TbBrandGithubFilled },
  { name: 'Postman', level: 85, icon: SiPostman },
  { name: 'Flask', level: 76, icon: SiFlask },
  { name: 'Node.js basics', level: 68, icon: FaNodeJs },
  { name: 'Responsive Design', level: 91, icon: TbRocket },
  { name: 'JWT Authentication', level: 82, icon: SiJsonwebtokens },
];

export const projects = [
  {
    title: 'Book Share App',
    stack: ['React', 'Node', 'MongoDB', 'REST APIs'],
    signal: 'Peer-to-peer reading exchange platform with inventory, requests, and user flows.',
    github: 'https://github.com/Posa5A6/book-share-app',
    live: 'https://book-share-app.netlify.app/',
    image:
      'linear-gradient(135deg, rgba(0,245,255,.55), rgba(123,44,255,.38)), radial-gradient(circle at 70% 20%, rgba(255,46,247,.55), transparent 35%)',
  },
  {
    title: 'Library Management System',
    stack: ['Python', 'Django', 'MySQL'],
    signal: 'Structured library operations for books, members, issue tracking, and data control.',
    github: 'https://github.com/Posa5A6/Libraray-Management-System-using-java-and-jdbc',
    image:
      'linear-gradient(135deg, rgba(24,119,255,.55), rgba(0,245,255,.22)), radial-gradient(circle at 30% 70%, rgba(255,46,247,.45), transparent 42%)',
  },
  {
    title: 'Bike Rental Portal',
    stack: ['React', 'Django', 'REST APIs'],
    signal: 'Rental booking interface with vehicle browsing, booking states, and admin-ready modules.',
    github: 'https://github.com/Posa5A6/BikeRentalPortal',
    live: 'https://bikerentalportal.onrender.com/',
    image:
      'linear-gradient(135deg, rgba(123,44,255,.58), rgba(5,8,22,.7)), radial-gradient(circle at 75% 65%, rgba(0,245,255,.5), transparent 40%)',
  },
  {
    title: 'PMDCS',
    stack: ['Django', 'MySQL', 'Auth', 'APIs'],
    signal: 'PMDCS healthcare data bridge focused on patient records and connected access.',
    github: 'https://github.com/Posa5A6/PMDCS',
    image:
      'linear-gradient(135deg, rgba(0,245,255,.45), rgba(8,255,170,.18)), radial-gradient(circle at 20% 30%, rgba(123,44,255,.52), transparent 38%)',
  },
  {
    title: 'BookHive',
    stack: ['React', 'Express', 'MongoDB'],
    signal: 'Community-driven book discovery and collection experience with modern UI patterns.',
    github: 'https://github.com/Posa5A6',
    image:
      'linear-gradient(135deg, rgba(255,46,247,.45), rgba(24,119,255,.33)), radial-gradient(circle at 80% 35%, rgba(0,245,255,.45), transparent 35%)',
  },
  {
    title: 'Campaign Voting System',
    stack: ['Python', 'Auth', 'Database'],
    signal: 'Secure voting workflow prototype with voter state, submission control, and result logic.',
    github: 'https://github.com/Posa5A6/Campaign_Voting_System',
    live: 'https://campaign-voting-system.onrender.com/',
    image:
      'linear-gradient(135deg, rgba(24,119,255,.42), rgba(123,44,255,.46)), radial-gradient(circle at 42% 18%, rgba(0,245,255,.55), transparent 34%)',
  },
];

export const achievements = [
  'NPTEL Programming in Modern C++',
  'Full Stack Development Certification',
  'TechMarathon participation',
  'CGR Talent Meet participation',
];

export const contactLinks = [
  { label: 'LinkedIn', value: 'narendra-posa-421067254', href: 'https://www.linkedin.com/in/narendra-posa-421067254/', icon: FaLinkedin },
  { label: 'GitHub', value: 'github.com/Posa5A6', href: 'https://github.com/Posa5A6', icon: FaGithub },
  { label: 'Gmail', value: 'narendra.dev@gmail.com', href: 'mailto:narendra.dev@gmail.com', icon: FaEnvelope },
  { label: 'Phone', value: '9014293910', href: 'tel:+919014293910', icon: TbTerminal2 },
  { label: 'Portfolio', value: 'narendraposa.netlify.app', href: 'https://narendraposa.netlify.app/', icon: TbRocket },
];

export const githubUser = 'Posa5A6';

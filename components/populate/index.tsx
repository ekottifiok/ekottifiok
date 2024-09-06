import {FaGithubSquare, FaLinkedin} from "react-icons/fa";
import {FaFlag, FaXTwitter} from "react-icons/fa6";
import {GiSpanner} from "react-icons/gi";
import {
  MdEmail,
  MdLaptop,
  MdMailOutline,
  MdPersonOutline,
  MdPhoneAndroid,
  MdStorage,
  MdWork,
} from "react-icons/md";
import {ImDatabase} from "react-icons/im";
import type {
  PortfolioTechnologiesInterface,
  ProjectsDataInterface,
  TimelineInterface
} from "@components/interface";
import {ProgrammingStackEnum, ProjectsDevices} from "@components/interface";

export const whatIDo = [
  'Application Developer',
  'Software Developer',
  'Hardware Engineer',
  'Full Stack Developer',
  'Coding Instructor'
];

export const IntroButtons = [
  {key: 1, icon: <MdPersonOutline/>, content: 'About Me', link: '#about-me'},
  {key: 2, icon: <MdWork/>, content: 'Portfolio', link: '#portfolio'},
  {key: 3, icon: <FaFlag/>, content: 'Projects', link: '#projects'},
  {key: 4, icon: <MdMailOutline/>, content: 'Contacts', link: '#contacts'},
]

export const ContactData = [
  {
    content: 'ekottifiok@gmail.com',
    icon: <MdEmail/>,
    key: 1,
    link: 'mailto:ekottifiok@gmail.com',
  },
  {
    content: 'ekottifiok',
    icon: <FaLinkedin/>,
    key: 2,
    link: 'https://www.linkedin.com/in/ekottifiok/',
  },
  {
    content: 'ekottifiok',
    icon: <FaGithubSquare/>,
    key: 3,
    link: 'https://github.com/ekottifiok',
  },
  {
    content: 'Ifiok Ekott',
    icon: <FaXTwitter/>,
    key: 4,
    link: 'https://twitter.com/IfiokEkott',
  },
]

const allDevices = [
  {device: ProjectsDevices.Android, id: 1},
  {device: ProjectsDevices.Ios, id: 2},
  {device: ProjectsDevices.Linux, id: 3},
  {device: ProjectsDevices.MacOS, id: 4},
  {device: ProjectsDevices.Windows, id: 5}
]

export const ProgrammingStack: Record<ProgrammingStackEnum, { image: string, link: string }> = {
  [ProgrammingStackEnum.CSharp]: {
    image: 'languages_logo/csharp.png',
    link: 'https://learn.microsoft.com/en-us/dotnet/csharp/'
  },
  [ProgrammingStackEnum.Dart]: {image: 'languages_logo/dart.png', link: 'https://dart.dev'},
  [ProgrammingStackEnum.Flutter]: {image: 'languages_logo/flutter.png', link: 'https://flutter.dev'},
  [ProgrammingStackEnum.Git]: {image: 'languages_logo/git.png', link: 'https://git-scm.com/'},
  [ProgrammingStackEnum.React]: {image: 'languages_logo/react.png', link: 'https://react.dev/'},
  [ProgrammingStackEnum.MySQL]: {image: 'languages_logo/react.png', link: 'https://react.dev/'},
  [ProgrammingStackEnum.SQLite]: {image: 'languages_logo/react.png', link: 'https://react.dev/'},
};

export const ProjectsData: ProjectsDataInterface[] = [
  {
    logo: 'projects_logo/localsend.png',
    title: 'LocalSend',
    devices: allDevices,
    subHeader: "Sending files over WiFi",
    language: [ProgrammingStackEnum.Dart, ProgrammingStackEnum.Flutter,],
  },
  {
    logo: 'projects_logo/bunny_communication.png',
    title: 'Bunny Communication',
    devices: [{device: ProjectsDevices.Windows, id: 1}],
    subHeader: "A WhatsApp clone for LAN communication",
    language: [
      ProgrammingStackEnum.CSharp,
    ],
  },
  {
    logo: 'projects_logo/bunny_communication.png',
    title: 'ConnectChat',
    devices: allDevices,
    subHeader: "Chatting service for LAN communication",
    language: [ProgrammingStackEnum.Dart, ProgrammingStackEnum.Flutter,],
  }
]

export const portfolioTechnologiesData: PortfolioTechnologiesInterface[] = [
  {icon: <MdPhoneAndroid size="2em"/>, title: 'Mobile Application', languages: [ProgrammingStackEnum.Flutter,]},
  {icon: <MdLaptop size="2em"/>, title: 'Frontend', languages: [ProgrammingStackEnum.React,]},
  {icon: <MdStorage size="2em"/>, title: 'Backend', languages: [ProgrammingStackEnum.React,]},
  {icon: <ImDatabase size="2em"/>, title: 'Database', languages: [ProgrammingStackEnum.React,]},
  {icon: <GiSpanner size="2em"/>, title: 'Miscellanous', languages: [ProgrammingStackEnum.React,]},
];

export const timelineData: TimelineInterface[] = [
  {
    timeline: '2015',
    isSchool: true,
    header: 'Python and Django Full Stack Web Developer Bootcamp',
    subheader: "I got a boot camp and learnt a lot about programming, building responsive websites," +
      "standards to be implemented when building websites, security and everything in between.",
    institute: 'Udemy',
    location: 'Online',
    simplified: false,
  },
  {
    timeline: '2017',
    isSchool: true,
    header: 'IT Essentials',
    subheader: "I learnt a lot of important computer skills, " +
      "like how to correctly use tools and safely work in a lab." +
      "Install components to build, repair, or upgrade personal computers.",
    institute: 'Cisco Networking Academy',
    location: 'Online',
    previewLink: 'certificates/cisco_it_essentials.jpg',
    simplified: false,
  },
  {
    timeline: '2014-2016',
    isSchool: true,
    header: 'Senior Secondary School',
    subheader: "I implemented what I learnt building a functional and responsive websites," +
      "it is during this period that I built my first website iJohnson.",
    institute: 'Niger Delta Science School',
    location: 'Port Harcourt, Nigeria',
    simplified: false,
  },
  {
    timeline: '2022',
    isSchool: true,
    header: 'BlockChain',
    subheader: 'I understand smart contracts, a core idea and computational model of blockchain that enables automation, autonomy, scalability and transparency.' +
      'How to think of innovative application models, leveraging the blockchain technology.',
    institute: 'Coursera',
    location: 'Online',
    previewLink: 'certificates/coursera_block_chain.jpg',
    simplified: false,
  },
  {
    timeline: '2022',
    isSchool: true,
    header: 'Developing Applications with Google Cloud',
    subheader: 'I learnt how to identify the purpose and value of Google Cloud products and services.' +
      'Deploy applications using Container Builder, Container Registry, and Terraform',
    institute: 'Coursera',
    location: 'Online',
    previewLink: 'certificates/coursera_gcp.jpg',
    simplified: false,
  },
  {
    timeline: '2023',
    isSchool: true,
    header: 'Software Engineering',
    subheader: "We had to perform task every day for a year with breaks only on holidays and 2 weeks break in between." +
      "I learnt a lot about programming like Git, C#, Ruby, Regex, Redis and some professional tools like LogRocket.",
    institute: 'ALX',
    location: 'Online',
    previewLink: 'certificates/alx_se.jpg',
    simplified: true,
  },
  {
    timeline: '2017-2024',
    isSchool: true,
    header: 'Bachelor of Electrical/Electronics Engineering',
    subheader: "I majored in Electronics and Computer Engineering, " +
      "we learnt a lot about electronics and how there make computers work. " +
      "I made many people and networked a lot during this period. " +
      "For our project we built an all in one result management software.",
    institute: 'University of Port Harcourt',
    location: 'Port Harcourt, Nigeria',
    simplified: true,
  },
  {
    timeline: '2023-present',
    isSchool: false,
    header: 'Software Engineer',
    subheader: "We are building an all in one hospital management system which entails," +
      "hospital record, booking an appointment with a doctor, pharmacy both pickup and home delivery. ",
    institute: 'Kloud Health',
    location: 'Remote',
    simplified: true,
  },
  {
    timeline: '2024',
    isSchool: true,
    header: 'Google Cybersecurity',
    subheader: 'I understand the importance of cybersecurity practices and their impact for organizations. ' +
      'I gained hands-on experience with Python, Linux, and SQL.',
    institute: 'Coursera',
    location: 'Online',
    previewLink: 'certificates/coursera_cyber_security.jpg',
    simplified: true,
  },
  {
    timeline: '2024',
    isSchool: true,
    header: 'Google IT Support',
    subheader: 'I learnt to perform day-to-day IT support tasks including computer assembly, ' +
      'wireless networking, installing programs, and customer service',
    institute: 'Coursera',
    location: 'Online',
    previewLink: 'certificates/coursera_it_support.jpg',
    simplified: false,
  },
]

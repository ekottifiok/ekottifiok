import {FaFlag} from "react-icons/fa6";
import {GiSpanner} from "react-icons/gi";
import {
  MdLaptop,
  MdMailOutline,
  MdPersonOutline,
  MdPhoneAndroid,
  MdStorage,
  MdWork,
} from "react-icons/md";
import {ImDatabase} from "react-icons/im";
import type {
  PortfolioTechnologiesInterface} from "@components/interface";
import {ProgrammingStackEnum, ProjectsDevices} from "@components/interface";
import { IoIosGlobe } from "react-icons/io";

export const whatIDo = [
  'Application Developer',
  'Software Developer',
  'Hardware Engineer',
  'Full Stack Developer',
  'Coding Instructor',
  'IT Instructor'
];

export const introButtons = [
  {key: 1, icon: <MdPersonOutline/>, content: 'About Me', link: '#about-me'},
  {key: 2, icon: <MdWork/>, content: 'Portfolio', link: '#portfolio'},
  {key: 3, icon: <FaFlag/>, content: 'Projects', link: '#projects'},
  {key: 4, icon: <MdMailOutline/>, content: 'Contacts', link: '#contacts'},
]

export const allDevices = [
  {device: ProjectsDevices.Android, id: 1},
  {device: ProjectsDevices.Ios, id: 2},
  {device: ProjectsDevices.Linux, id: 3},
  {device: ProjectsDevices.MacOS, id: 4},
  {device: ProjectsDevices.Windows, id: 5}
]

export const portfolioTechnologiesData: PortfolioTechnologiesInterface[] = [
  {icon: <MdPhoneAndroid size="2em"/>, title: 'Mobile Application', languages: [ProgrammingStackEnum.Flutter,],},
  {icon: <MdLaptop size="2em"/>, title: 'Frontend', languages: [ProgrammingStackEnum.React,]},
  {icon: <MdStorage size="2em"/>, title: 'Backend', languages: [ProgrammingStackEnum.Express,]},
  {icon: <ImDatabase size="2em"/>, title: 'Database', languages: [ProgrammingStackEnum.MySQL, ProgrammingStackEnum.SQLite]},
  {icon: <GiSpanner size="2em"/>, title: 'Miscellanous', languages: [ProgrammingStackEnum.Git,]},
  {icon: <IoIosGlobe size="2em"/>, title: 'Full-stack Webapp', languages: [ProgrammingStackEnum.Django, ProgrammingStackEnum.Nextjs]},
];
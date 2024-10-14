import { type ProjectsDataInterface, ProgrammingStackEnum, ProjectsDevices } from "@components/interface";
import { allDevices } from "./miscellaneous";


export const projectsData: ProjectsDataInterface[] = [
  {
    devices: allDevices,
    language: [ProgrammingStackEnum.Dart, ProgrammingStackEnum.Flutter,],
    link: "https://github.com/ekottifiok/localsend",
    logo: 'projects_logo/localsend.png',
    subHeader: "Sending files over WiFi",
    title: 'LocalSend',
  },
  {
    devices: [{ device: ProjectsDevices.Windows, id: 1 }],
    language: [ProgrammingStackEnum.CSharp,],
    logo: 'projects_logo/bunny_communication.png',
    subHeader: "A WhatsApp clone for LAN communication",
    title: 'Bunny Communication',
  },
  {
    devices: allDevices,
    language: [ProgrammingStackEnum.Dart, ProgrammingStackEnum.Flutter,],
    link: "https://github.com/ekottifiok/ConnectChat",
    logo: 'projects_logo/bunny_communication.png',
    subHeader: "Chatting service for LAN communication",
    title: 'ConnectChat',
  },
  {
    devices: [{device: ProjectsDevices.Web, id: 1},],
    language: [ProgrammingStackEnum.Django, ProgrammingStackEnum.Python],
    link: "https://www.ifiokekott.pythonanywhere.com/",
    logo: 'projects_logo/bunny_communication.png',
    subHeader: "Forum for students in tetiary institutions to ask question and get answers",
    title: "iJohnson"
  }
];

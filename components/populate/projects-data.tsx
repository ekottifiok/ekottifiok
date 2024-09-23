import { type ProjectsDataInterface, ProgrammingStackEnum, ProjectsDevices } from "@components/interface";
import { allDevices } from "./miscellaneous";


export const projectsData: ProjectsDataInterface[] = [
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
    devices: [{ device: ProjectsDevices.Windows, id: 1 }],
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
];

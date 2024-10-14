import type {ProgrammingStackEnum, ProjectsDevices} from "./pages.ts";

export interface ProjectsDataInterface {
  devices: {device: ProjectsDevices, id: number}[];
  language: ProgrammingStackEnum[],
  link?: string;
  logo: string;
  subHeader: string;
  title: string;
}
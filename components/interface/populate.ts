import type {ProgrammingStackEnum, ProjectsDevices} from "./pages.ts";

export interface ProjectsDataInterface {
  logo: string;
  title: string;
  devices: {device: ProjectsDevices, id: number}[];
  subHeader: string;
  language: ProgrammingStackEnum[],
}
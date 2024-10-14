import type { ReactNode } from "react"
import { type SxProps, type Theme } from "@mui/material";

export interface PageParameters {
  upMd?: boolean;
  upSm?: boolean;
}

export enum ProjectsDevices {
  Android = 'Android',
  Ios = 'iOS',
  Linux = 'Linux',
  MacOS = 'MacOS',
  Web = 'Web',
  Windows = 'Windows',
}

export enum ProgrammingStackEnum {
  CSharp = 'C#',
  Dart = 'Dart',
  Django = 'Django',
  Flutter = 'Flutter',
  Git = 'Git',
  MySQL = 'MySQL/MariaDB',
  Python = 'Python',
  React = 'React',
  SQLite = 'SQLite',
  Nextjs = "Nextjs",
  Express = "Express",
}

export interface PortfolioTechnologiesInterface {
  icon: ReactNode,
  languages: ProgrammingStackEnum[],
  title: string,
}

export interface TimelineInterface {
  header: string;
  institute: string;
  isSchool: boolean;
  location: string;
  previewLink?: string;
  subheader: string;
  period: string;
  simplified: boolean;
  isPresent: boolean;
}

export interface PageDesignParameters {
  children: ReactNode;
  header: string;
  sx?: SxProps<Theme>
}

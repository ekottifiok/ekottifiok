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
  Windows = 'Windows',
}

export enum ProgrammingStackEnum {
  Dart = 'Dart',
  CSharp = 'C#',
  Flutter = 'Flutter',
  Git = 'Git',
  React = 'React',
  SQLite = 'SQLite',
  MySQL = 'MySQL/MariaDB'
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
  timeline: string;
  simplified: boolean;
}

export interface PageDesignParameters {
  children: ReactNode;
  header: string;
  sx?: SxProps<Theme>
}

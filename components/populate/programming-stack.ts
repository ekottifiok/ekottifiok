import { ProgrammingStackEnum } from "@components/interface";


export const programmingStack: Record<ProgrammingStackEnum, { image: string; link: string; }> = {
  [ProgrammingStackEnum.CSharp]: {
    image: 'languages_logo/csharp.png',
    link: 'https://learn.microsoft.com/en-us/dotnet/csharp/'
  },
  [ProgrammingStackEnum.Dart]: { image: 'languages_logo/dart.png', link: 'https://dart.dev' },
  [ProgrammingStackEnum.Flutter]: { image: 'languages_logo/flutter.png', link: 'https://flutter.dev' },
  [ProgrammingStackEnum.Git]: { image: 'languages_logo/git.png', link: 'https://git-scm.com/' },
  [ProgrammingStackEnum.React]: { image: 'languages_logo/react.png', link: 'https://react.dev/' },
  [ProgrammingStackEnum.MySQL]: { image: 'languages_logo/react.png', link: 'https://react.dev/' },
  [ProgrammingStackEnum.SQLite]: { image: 'languages_logo/react.png', link: 'https://react.dev/' },
  [ProgrammingStackEnum.Django]: {
    image: "languages_logo/django-logo-negative.webp",
    link: "https://www.djangoproject.com"
  },
  [ProgrammingStackEnum.Python]: {
    image: "languages_logo/python.jpeg",
    link: "https://www.python.org"
  },
  [ProgrammingStackEnum.Nextjs]: {
    image: "languages_logo/nextjs.png",
    link: "https://nextjs.org"
  },
  [ProgrammingStackEnum.Express]: {
    image: "languages_logo/expressjs.png",
    link: "https://expressjs.com/"
  }
};

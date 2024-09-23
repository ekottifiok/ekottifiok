import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";


export const contactData = [
  {
    content: 'ekottifiok@gmail.com',
    icon: <MdEmail />,
    key: 1,
    link: 'mailto:ekottifiok@gmail.com',
  },
  {
    content: 'ekottifiok',
    icon: <FaLinkedin />,
    key: 2,
    link: 'https://www.linkedin.com/in/ekottifiok/',
  },
  {
    content: 'ekottifiok',
    icon: <FaGithubSquare />,
    key: 3,
    link: 'https://github.com/ekottifiok',
  },
  {
    content: 'Ifiok Ekott',
    icon: <FaXTwitter />,
    key: 4,
    link: 'https://twitter.com/IfiokEkott',
  },
];

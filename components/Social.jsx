import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const socials = [
  {
    name: "Github",
    icon: <FaGithub />,
    path: "https://www.github.com/prashant-sagar-shakya/",
  },
  {
    name: "Linkedin",
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/prashant-sagar-shakya01//",
  },
  {
    name: "X",
    icon: <FaSquareXTwitter />,
    path: "https://x.com/Prashant_162003/",
  },
  {
    name: "Leetcode",
    icon: <SiLeetcode />,
    path: "https://leetcode.com/u/Prashant162003/",
  },
];
const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;

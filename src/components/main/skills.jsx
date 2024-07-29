import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { FaGitSquare } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { SiNestjs } from "react-icons/si";
import { SiSocketdotio } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";
import { TbBrandCypress } from "react-icons/tb";
import { TbBrandStorybook } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";

const Skills = () => {
  return (
    <section className="flex flex-col items-center gap-16 mt-20 max-sm:w-[343px]  ">
      <div className="h-20 w-full flex flex-col justify-center items-center gap-7 ">
        <button className="h-7 w-20 bg-gray-200 rounded-2xl text-black ">
          Skills
        </button>
        <span className="text-center">
          The skills, tools and technologies I am really good at:
        </span>
      </div>
      <div className="w-[1100px] h-[370px] flex flex-row flex-wrap gap-16 text-center max-sm:w-[343px] max-sm:h-[790px] max-sm:gap-7 max-sm:justify-center">
        <div>
          <IoLogoJavascript size={64} />
          <span>Javascript</span>
        </div>
        <div>
          <FaReact size={64} />
          <span>React</span>
        </div>
        <div>
          <FaNodeJs size={64} />
          <span>Node.js</span>
        </div>
        <div>
          <RiNextjsLine size={64} />
          <span>Next.js</span>
        </div>
        <div>
          <FaGitSquare size={64} />
          <span>Git</span>
        </div>
        <div>
          <RiTailwindCssFill size={64} />
          <span>Tailwind.css</span>
        </div>
        <div>
          <SiExpress size={64} />
          <span>Express.js</span>
        </div>
        <div>
          <SiNestjs size={64} />
          <span>Nest.js</span>
        </div>
        <div>
          <SiSocketdotio size={64} />
          <span>Socket.io</span>
        </div>
        <div>
          <BiLogoPostgresql size={64} />
          <span>PostgreSQL</span>
        </div>
        <div>
          <SiMongodb size={64} />
          <span>Mongodb</span>
        </div>
        <div>
          <FaSass size={64} />
          <span>Sass/Scss</span>
        </div>
        <div>
          <IoLogoFigma size={64} />
          <span>Figma</span>
        </div>
        <div>
          <TbBrandCypress size={64} />
          <span>Cypress</span>
        </div>
        <div>
          <TbBrandStorybook size={64} />
          <span>Storybook</span>
        </div>
        <div>
          <SiTypescript size={64} />
          <span>Typescript</span>
        </div>
      </div>
    </section>
  );
};
export default Skills;

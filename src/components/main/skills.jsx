import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { FaGitSquare } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

const Skills = () => {
  return (
    <section className="flex flex-col items-center gap-16 mt-20">
      <div className="h-20 w-full flex flex-col justify-center items-center gap-7">
        <button className="h-7 w-20 bg-gray-200 rounded-2xl text-black ">
          Skills
        </button>
        <span>The skills, tools and technologies I am really good at:</span>
      </div>
      <div className="flex flex-row gap-5">
        <div>
          <IoLogoJavascript />
          <span>Javascript</span>
        </div>
        <div>
          <FaReact />
          <span>React</span>
        </div>
        <div>
          <FaNodeJs />
          <span>Node.js</span>
        </div>
        <div>
          <RiNextjsLine />
          <span>Next.js</span>
        </div>
        <div>
          <FaGitSquare />
          <span>Git</span>
        </div>
        <div>
          <RiTailwindCssFill />
          <span>Tailwind.css</span>
        </div>
      </div>
    </section>
  );
};
export default Skills;

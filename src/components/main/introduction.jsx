import { IoLocationOutline } from "react-icons/io5";
import { PiDotOutlineFill } from "react-icons/pi";
import { CiTwitter } from "react-icons/ci";
import { FaFigma } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
// import { motion } from "framer-motion";

const Introduction = () => {
  return (
    <section className="flex flex-col justify-evenly intro max-md:hidden">
      <h1 className="text-6xl">Hi, I'm Erka</h1>
      <span className="text-base">
        I specialize in full stack development, particularly with React.js and
        Node.js. My main goal is to create exceptional digital experiences that
        are fast, visually appealing, and accessible to everyone. With over 7
        years of experience in web development, I continue to find joy in
        crafting innovative solutions and designs.
      </span>
      <ul className="text-base text-slate-400">
        <li>Ulaanbaatar, Mongolia</li>
        <li>Available for new projects</li>
      </ul>
      <div className="flex gap-3">
        <CiTwitter size={24} />
        <FaFigma size={24} />
        <FiGithub size={24} />
      </div>
    </section>
  );
};
export default Introduction;

import { MdOutlineMail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { MdContentCopy } from "react-icons/md";
import { CiTwitter } from "react-icons/ci";
import { FaFigma } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaRegCopyright } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <section className=" m-auto flex flex-col items-center gap-10 pt-20 max-sm:pt-20">
      <div className="h-7 flex flex-col items-center gap-7  max-sm:w-[343px] max-sm:flex-col">
        <button className="h-7 w-28 bg-gray-200 rounded-2xl text-black">
          Get in touch
        </button>
        <span>
          What’s next? Feel free to reach out to me if you're looking for a
          developer, have a query, or simply want to connect.
        </span>
      </div>

      <div className="flex flex-col gap-5 mt-10 max-sm:gap-2">
        <h1 className="flex gap-4 items-center text-4xl max-sm:text-xl max-sm:pt-8">
          <MdOutlineMail size={24} />
          tom@pinecone.com
          <MdContentCopy size={24} />
        </h1>
        <h1 className="flex gap-11 items-center text-4xl max-sm:text-xl">
          <IoMdCall size={24} />
          +976 88112233
          <MdContentCopy size={24} />
        </h1>
      </div>
      <div className="flex flex-col gap-5">
        <span>You may also find me on these platforms!</span>
        <div className="flex gap-3 m-auto">
          <CiTwitter size={24} />
          <FaFigma size={24} />
          <FiGithub size={24} />
        </div>
      </div>
      <div className="h-16 w-full bg-gray-900">
        <span className="flex font-xs place-content-center items-center mt-5 ">
          <FaRegCopyright size={12} /> 2024 | Greetings with{" "}
          <FaHeart size={12} /> from Ulaanbaatar.
        </span>
      </div>
    </section>
  );
};

export default Footer;

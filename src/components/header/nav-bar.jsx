import Menu from "./menu";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

const Downloadbtn = () => {
  return (
    <div className="flex items-center gap-5 ">
      <Menu />
      <div className="border-slate-500 border-l-2 flex justify-evenly gap-5 pl-5">
        <button>
          <MdOutlineLightMode />
          <MdOutlineDarkMode />
        </button>
        <button className="bg-white py-[6px] px-4 rounded-xl text-black font-bold ">
          Download CV
        </button>
      </div>
    </div>
  );
};
export default Downloadbtn;

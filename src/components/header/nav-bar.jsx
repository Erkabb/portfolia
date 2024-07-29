import Menu from "./menu";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import MobileMenu from "./mobile-menu";
import { useTheme } from "next-themes";

const menuList = [
  { label: "Home", link: "/" },
  { label: "About", link: "/#about" },
  { label: "Work", link: "/#work" },
  { label: "Contact", link: "/#contact" },
];

const Downloadbtn = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex items-center gap-5 ">
      <nav className="items-center justify-between  space-x-4 md:flex" />
      <Menu menuList={menuList} />
      <div className="border-slate-500 border-l-2 flex justify-evenly gap-5 pl-5">
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-full focus:outline-none focus:ring-1 focus:ring-gray-500"
        >
          {theme === "dark" ? (
            <MdOutlineLightMode size={20} className="hover:cursor-pointer" />
          ) : (
            <MdOutlineDarkMode size={20} className="hover:cursor-pointer" />
          )}
        </button>
        <button className=" py-[6px] px-4 rounded-xl font-bold max-sm:hidden dark:bg-white bg-black text-white dark:text-black">
          Download CV
        </button>
      </div>
      <MobileMenu />
    </div>
  );
};
export default Downloadbtn;

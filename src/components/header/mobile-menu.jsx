import { useState } from "react";
import { useTheme } from "next-themes";
import { IoMenuOutline } from "react-icons/io5";
import { LiaTimesSolid } from "react-icons/lia";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";


const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, setTheme } = useTheme();

    const dropdownMenu = () => {
        setIsOpen(!isOpen);
 }
    return (
        <div>
            <button onClick={dropdownMenu} className="md:hidden py-2">
            <IoMenuOutline size={24}/>
            </button>
            {isOpen && (
                <section className=" absolute top-0 left-0 z-10 flex justify-end w-full h-screen bg-gray-200 dark:bg-white">
                    <div className="w-10/12 p-5 bg-white flex flex-col dark:bg-gray-900 gap-5 shadow-md shadow-gray-900">
                    <div className="flex justify-between items-center">
                        <span className="font-bold text-3xl">ERKA</span>
                        <button onClick={dropdownMenu} className="text-gray-700 dark:text-gray-200"><LiaTimesSolid size={24} /></button>
                    </div>
                    <div className="h-44 flex flex-col text-base justify-center border-y-2 border-solid gap-3 border-gray-500 ">
                       <a href="/about">About</a>
                       <a href="/work">Work</a>
                       <a href="/testimonials">Testimonials</a>
                       <a href="/contact">Contact</a>
                    </div>
                    <div className="flex justify-between">
                        <span>Switch theme</span>
                        <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                {theme === "dark" ? (
                  <MdOutlineLightMode />
                ) : (
                  <MdOutlineDarkMode />
                )}
                        </button>
                    
                        </div>
                        <button className="w-[288px] bg-white py-[6px]  mx-auto px-4 rounded-xl text-black font-bold">Download CV</button>
                    </div>
                </section>
            )}
            
        </div>
    );
}
export default MobileMenu;
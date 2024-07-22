import Menu from "./menu";

const Downloadbtn = () => {
    return (
        <div className="flex items-center gap-5">
            <Menu/>
            <button className="bg-white py-[6px] px-4 rounded-xl text-black font-bold">Download CV</button>
        </div>
    )
}
export default Downloadbtn;
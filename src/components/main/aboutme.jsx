import Jobhistorys from "./jobhistory";
import Coverpic from "./pfptwo";

const Aboutme = () => {
  return (
    <section className="flex flex-wrap justify-center gap-10 mt-20 max-sm:px-10">
      <div className="h-7 w-full flex justify-center">
        <button className="h-7 w-28 bg-gray-200 rounded-2xl text-black">
          About me
        </button>
      </div>
      <Coverpic />
      <Jobhistorys />
    </section>
  );
};
export default Aboutme;

const Experience = ({ title, logo, jobroles }) => {
  return (
    <section>
      <div>
        <div className="m-auto flex justify-between h-72 drop-shadow-2xl shadow-white rounded-lg mb-3 bg-gray-800 pt-9 mt-7 pl-7 exp max-sm:w-[343px] max-sm:h-[380px] max-sm:flex-col max-sm:gap-3">
          <div className="flex-1 ">
            <img src={logo} alt="logo" />
          </div>
          <div className="flex-1">
            <h1 className="text-xl text-white pb-4">{title}</h1>
            <ul className="list-disc text-base flex flex-col gap-5 text-gray-300">
              {jobroles.map((role) => (
                <li>{role}</li>
              ))}
            </ul>
          </div>
          <div className="flex-1 text-gray-400 text-center max-sm:text-start">
            <p>{new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;

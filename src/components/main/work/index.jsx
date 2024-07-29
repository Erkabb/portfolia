const Work = ({ project, desc, projectName }) => {
  return (
    <section className="m-auto flex items-center gap-10 work bg-gray-800 px-5 rounded-lg max-sm:w-[340px] max-sm:h-[780px] max-sm:flex-col max-sm:py-10">
      <div className=" h-[340px] flex items-center ">
        <img src={project} alt="photo" />
      </div>
      <div className="flex-1 flex flex-col gap-10 pt-10 max-sm:gap-5 max-sm:pt-4">
        <h1 className="text-2xl font-bold">{projectName}</h1>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec
          urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae.
        </span>
        <div className="flex flex-wrap gap-4">
          {desc.map((types) => (
            <div className="w-32 h-7 bg-gray-200 text-slate-700 text-center text-sm rounded-lg ">
              {types}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Work;

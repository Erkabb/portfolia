const Work = ({ project, desc, projectName }) => {
  return (
    <section className="m-auto flex work">
      <div className="flex-1">
        <img src={project} alt="photo" />
      </div>
      <div className="flex-1 flex flex-col gap-10 pt-10">
        <h1>{projectName}</h1>
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

const Experience = ({ title, logo, jobroles }) => {
  return (
    <section>
      <div className="m-auto flex justify-between h-72 drop-shadow-2xl shadow-white rounded-lg mb-3 bg-gray-50 text-black pt-9 mt-7 pl-7 exp">
        <div className="flex-1">
          <img src={logo} alt="logo" />
        </div>
        <div className="flex-1">
          <h1 className="text-xl text-gray-900 pb-4">{title}</h1>
          <ul className="list-disc text-base flex flex-col gap-5 text-gray-600">
            {jobroles.map((role) => (
              <li>{role}</li>
            ))}
          </ul>
        </div>
        <div className="flex-1 text-gray-400 text-center">
          <p>{new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </section>
  );
};
export default Experience;
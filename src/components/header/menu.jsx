const Menu = ({ menuList }) => {
  return (
    <ul className="flex space-x-4 md:flex-row max-md:hidden">
      {menuList.map((menu) => (
        <li>
          <a href={`${menu.link}`} className="">
            {menu.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Menu;


  const Menu = ({menuList}) => {
    return (
     
        <ul className="flex space-x-4 md:flex-row max-sm:hidden">
          {menuList.map((menu) => (
            <li>
              <a href={`${menu.link}`} className="text-gray-700 dark:text-gray-200">
          {menu.label}
        </a>
            </li>
          ))}
        </ul>
    
    );
  };
  
  export default Menu;
  
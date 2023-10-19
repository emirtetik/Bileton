import { NavLink } from "react-router-dom";
import { mainMenu } from "../../../constant";
import classNames from "classnames";
import Logo from "../logo";

const Menu = () => {
  return (
    <nav className="px-2 py-2 ">
      <aside >
      <Logo/>
        {mainMenu.map((menu, index) => (
          <NavLink key={index} to={menu.path} className="py-1 text-white">
            {({ isActive }) => (
              <div
                className={classNames(
                  "inline-flex   bg-white/10  rounded  items-center group-hover:bg-white/10 w-full group-active:scale-95 self-stretch space-x-2 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white",
                  { "font-bold": isActive }
                )}
              >
                <div className="flex items-center ">
                    {!isActive && menu.icon.passive}
                   {isActive && menu.icon.active}
                  <div className="pr-4 text-xl">{menu.title}</div>
                </div>
              </div>
            )}
          </NavLink>
        ))}
      </aside>
    </nav>
  );
};

export default Menu;



import { NavLink } from "react-router-dom";
import { mainMenu } from "../../../constant";
import classNames from "classnames";
import Logo from "../logo";
import Music from "./music";
import Scene from "./scene";
import Search from "../../_coreComponent/search";

const Menu = () => {
  return (
    <nav className="px-4 py-6 ">
      <aside >
      <Logo/>
        {mainMenu.map((menu, index) => (
          <NavLink key={index} to={menu.path} className="py-1 text-white/30">
            {({ isActive }) => (
              <div
                className={classNames(
                  "inline-flex   rounded-full p-2 mb-3 items-center  w-full group-active:scale-95 self-stretch   transition-all duration-200 hover:bg-white/10",
                  { " bg-white/10  font-bold text-white": isActive }
                )}
              >
                <div className="flex items-center ">
                    {!isActive && menu.icon.passive}
                   {isActive && menu.icon.active}
                  <div className="pl-2 ">{menu.title}</div>
                </div>
              </div>
            )}
          </NavLink>
        ))}
        <div className="mt-3 mb-3 bg-white border"/>
        <h6 className="py-1 text-white/30">Kategoriler</h6>
        <Music/>
        <Scene/>
        <Search/>
      </aside>
    </nav>
  );
};

export default Menu;



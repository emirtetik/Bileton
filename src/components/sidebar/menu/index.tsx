import { NavLink } from "react-router-dom";
import { mainMenu } from "../../../constant";
import { ImMenu } from "react-icons/im";
import { GrClose } from "react-icons/gr";
import { BiSolidCategoryAlt, BiSolidSearch } from "react-icons/bi";
import { FaMusic } from "react-icons/fa";
import { GiTheater } from "react-icons/gi";
import classNames from "classnames";
import Logo from "../logo";
import Music from "./music";
import Scene from "./scene";
import Search from "../../_coreComponent/search";

interface SideBarProps {
  setIsOpen: (value: boolean) => void;  
  isOpen: boolean;
}

const Menu: React.FC<SideBarProps> = ({ setIsOpen, isOpen }) => {
  return (
    <nav
      className={`fixed top-0 left-0 h-full transition-all duration-500 ease-in-out ${
        isOpen ? "w-72" : "w-16"
      } bg-blue-900`}
    >
      <div className="px-4 py-4">
        <header className="flex items-center justify-around h-16">
          <button
            type="button"
            className="text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <GrClose className="w-6 h-6" />
            ) : (
              <ImMenu className="w-6 h-6" />
            )}
          </button>
          {isOpen && <Logo />}
        </header>
        <div className="mt-8 space-y-4">
          {mainMenu.map((item, index) => (
            <NavLink key={index} to={item.path} className="py-1 text-white/30">
              {({ isActive }) => (
                <div
                  className={classNames(
                    "inline-flex rounded-full p-1 mb-3 items-center w-full group-active:scale-95 self-stretch transition-all duration-200 hover:bg-white/10 font-raleway ",
                    { "bg-white/10 font-bold font-raleway text-white": isActive }
                  )}
                >
                  <div className="flex items-center ">
                    {!isActive && item.icon.passive}
                    {isActive && item.icon.active}
                    {isOpen && <div className="pl-2">{item.title}</div>}
                  </div>
                </div>
              )}
            </NavLink>
          ))}
        </div>
        <div className="mt-3 mb-3 bg-white border" />
        <div className="flex flex-col gap-3 items-left ">
          {isOpen ? (
            <h6 className="py-1 font-normal text-white/30 font-raleway"> Kategoriler</h6>
          ) : (
            <BiSolidCategoryAlt className="w-6 h-6" />
          )}
          {isOpen ? <Music /> : <FaMusic className="w-6 h-6 cursor-pointer " />}
          {isOpen ? (
            <Scene />
          ) : (
            <GiTheater className="w-6 h-6 cursor-pointer " />
          )}
          {isOpen ? (
            <Search />
          ) : (
            <BiSolidSearch className="w-6 h-6 cursor-pointer " />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Menu;

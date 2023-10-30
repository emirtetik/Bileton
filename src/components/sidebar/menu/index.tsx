import { useRef } from 'react';
import { Link, NavLink } from "react-router-dom";
import { mainMenu } from "../../../constant";
import { ImMenu } from "react-icons/im";
import { GrClose, GrUserAdmin } from "react-icons/gr";
import { BiSolidCategoryAlt, BiSolidSearch } from "react-icons/bi";
import { FaMusic,FaTheaterMasks } from "react-icons/fa";
import { useState } from "react";
import classNames from "classnames";
import Logo from "../logo";
import Music from "./music";
import Scene from "./scene";
import Search from "../../_coreComponent/search";
import Account from "../account";
import useSWR from "swr";
import { EventService } from "../../../services/EventService";
import { event } from "../../../types";

import { useClickAway } from 'react-use';
interface SideBarProps {
  setIsOpen: (value: boolean) => void;
  isOpen: boolean;
}
function slugify(str: string) {
  return String(str)
    .normalize("NFKD") // split accented characters into their base characters and diacritical marks
    .replace(/[\u0300-\u036f]/g, "") // remove all the accents, which happen to be all in the \u03xx UNICODE block.
    .trim() // trim leading or trailing whitespace
    .toLowerCase() // convert to lowercase
    .replace(/[^a-z0-9 -]/g, "") // remove non-alphanumeric characters
    .replace(/\s+/g, "-") // replace spaces with hyphens
    .replace(/-+/g, "-"); // remove consecutive hyphens
}
const fetcher = () => EventService.getAll();

const Menu: React.FC<SideBarProps> = ({ setIsOpen, isOpen }) => {
  const ref = useRef(null)
  const [inputValue, setInputValue] = useState("");
  const [listOpen, setListOpen] = useState(false);
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setListOpen(true);
  };

  // search altında açılan divi kapatmak için
  useClickAway(ref,() => {
    if (listOpen) {
       setListOpen(false)
    }
  }) 
  const { data, isLoading } = useSWR("search", fetcher, {

    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  console.log(error);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  const filtered = data.filter((item: event) => {
    return item.name.toLowerCase().includes(inputValue.toLowerCase());
  });
  
  

  return (
    <nav
      className={`max-h-screen min-h-screen  flex flex-col fixed top-0 transition-all duration-500 ease-in-out ${
        isOpen ? "w-72" : "w-16"
      } bg-primary`}
    >
      <div className="px-4 py-4">
        <header className="flex items-center justify-around h-16">
          <button
            type="button"
            className='text-third'
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
            <NavLink key={index} to={item.path} className="py-1 text-fifth">
              {({ isActive }) => (
                <div
                  className={classNames(
                    "inline-flex rounded-full p-1 mb-3 items-center w-full group-active:scale-95 self-stretch transition-all duration-200 hover:bg-fourth font-raleway ",
                    {
                      "bg-fourth  font-bold font-raleway text-white": isActive,
                    }
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
        <div className="flex flex-col gap-4 items-left ">
          {isOpen ? (
            <h6 className="py-1 font-normal text-fifth font-raleway">
              {" "}
              Kategoriler
            </h6>
          ) : (
            <BiSolidCategoryAlt className="w-6 h-6" />
          )}
          {isOpen ? <Music /> : <FaMusic className="w-6 h-6 cursor-pointer text-fifth" />}
          {isOpen ? (
            <Scene />
          ) : (
            <FaTheaterMasks className="w-6 h-6 cursor-pointer text-fifth " />
          )}
          {isOpen ? (
            <div ref={ref} className="relative  ">
              <Search onInputChange={onInputChange} inputValue={inputValue} />
              {listOpen && (
                <div className="absolute text-text font-medium font-raleway mt-2 h-72 overflow-auto p-2 bg-fifth rounded-md w-full text-black">
                  {filtered?.map((item: event, i:number) => (
                    <div
                    key={i}
                      className="hover:bg-secondary rounded-md"
                      onClick={() => {
                        setListOpen(false);
                        setInputValue("");
                      }}
                    >
                      <Link
                        to={`/event/${slugify(item.name)}`}
                        className="block"
                      >
                        {item.name}
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <BiSolidSearch className="w-6 h-6 cursor-pointer text-fifth" />
          )}
        </div>
      </div>
      <div className="px-5 py-6 mt-auto ">

        {!isOpen ? (
          <GrUserAdmin className="w-6 h-6 cursor-pointer" />
        ) : (
          <Account />
        )}
      </div>

    </nav>
  );
};

export default Menu;

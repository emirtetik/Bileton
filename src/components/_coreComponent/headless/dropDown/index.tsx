import { Menu } from "@headlessui/react";
import classNames from "classnames";
import { FC } from "react";
import { Link } from "react-router-dom";
import React from 'react'

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
interface DropDownProps {
  list: {
    name: string;
    id?: string;
  }[];
  title?: string;
  className?: string;
  background: string;
  width: string;
  shadow: string;
  onclick?: (value: string) => void;
  linkActive?: boolean;
  type: string;
  icon?: React.ReactNode

}

const DropDown: FC<DropDownProps> = ({
  list,
  title,
  className,
  background,
  width,
  shadow,
  onclick,
  linkActive,
  type,
  icon
}) => {
  return (
    <div className={`${className}  transition-colors `}>
      <Menu>
          <div>
            <Menu.Button
              className={classNames(
                `${width} flex font-raleway font-medium  p-2 rounded-md  items-center justify-between `
              )}
            >
            {icon ? icon : title}
            </Menu.Button>
            <div
              className={`absolute ${shadow} ${className}  text-black z-20  mt-2 hover:border-1 ${background}`}
            >
              <Menu.Items>
                {list.map((item, i) => (
                  <Menu.Item key={i} >
                    {({ active }) => (
                      <div className="p-1 pl-3 text-black border border-yellow-500">
                        {linkActive ? (
                          <Link to={`/${type}/${slugify(item.name)}`}>
                            <button
                              onClick={() => {
                                onclick && onclick(item.name);
                              }}
                              className={classNames({
                                "text-black font-bold": active,
                              })}
                            >
                              {item.name}
                            </button>
                          </Link>
                        ) : (
                          <button
                            onClick={() => {
                              onclick && onclick(item.name);
                            }}
                            className={classNames("text-fourth", {
                              "text-primary font-bold": active,
                            })}
                          >
                            {item.name}
                          </button>
                        )}
                      </div>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </div>
          </div>
      </Menu>
    </div>
  );
};

export default DropDown;

import { Menu } from "@headlessui/react";
import classNames from "classnames";
import { FC } from "react";

interface DropDownProps {
  list: {
    name: string;
  }[];
  title: string;
}

const DropDown: FC<DropDownProps> = ({ list, title }) => {
  return (
    <div className="text-black">
      <Menu>
        {({ open }) => (
          <div>
            <Menu.Button
              className={classNames(
                " flex text-black p-2 rounded-md w-32 items-center justify-around  ",
                {
                  "bg-gray-100": open,
                }
              )}
            >
              {" "}
              {title}
              <svg
                className={classNames({
                  "rotate-180 text-yellow-300 ": open,
                })}
                viewBox="0 0 24 24"
                width={18.75}
                height={18.75}
              >
                <path
                  fill="currentColor"
                  d="M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z"
                ></path>
              </svg>
            </Menu.Button>
            <div className=" absolute bg-gray-100 w-32 mt-2 hover:border-1">
              <Menu.Items>
                {list.map((item, i) => (
                  <Menu.Item key={i}>
                    {({ active }) => (
                      <div className="pl-3 p-1">
                        <button className={`${active} flex `}>
                          {item.name}
                        </button>
                      </div>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </div>
          </div>
        )}
      </Menu>
    </div>
  );
};

export default DropDown;

import { Menu } from "@headlessui/react";
import classNames from "classnames";
import { FC } from "react";

interface DropDownProps {
  list: {
    name: string;
  }[];
  title: string;
  className?: string;
  background: string;
  width: string;
  shadow: string;
  onclick?: (value: string) => void;
  onSecondClick?: (value: string) => void;
}

const DropDown: FC<DropDownProps> = ({
  list,
  title,
  className,
  background,
  width,
  shadow,
  onclick,
}) => {
  return (
    <div className={`${className} `}>
      <Menu>
        {({ open }) => (
          <div>
            <Menu.Button
              className={classNames(
                `${width} flex font-raleway font-normal  p-2 rounded-md  items-center justify-between `,
               
              )}
            >
              {" "}
              {title}
              <svg
                className={classNames({
                  "rotate-180 text-blue-500 ": open,
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
            <div
              className={`absolute ${shadow} ${width} rounded-md mt-2 hover:border-1 ${background}`}
            >
              <Menu.Items>
                {list.map((item, i) => (
                  <Menu.Item key={i}>
                    {({ active }) => (
                      <div className="p-1 pl-3">

                        <button
                          onClick={() => {
                            onclick && onclick(item.name);
                          }}
                          className={classNames({
                            "text-blue-500 font-bold": active,
                          })}
                        >
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

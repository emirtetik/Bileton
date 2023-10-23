import { Menu } from "@headlessui/react";
import classNames from "classnames";
import { musicMenu } from "../../../../constant";
import { Link } from "react-router-dom";

const Music = () => {
  return (
    <div className="text-white">
      <Menu>
        {({ open }) => (
          <div>
            <Menu.Button className={classNames(' flex text-white   p-2 rounded-full items-center justify-between  w-full ',{
            " text-yellow-300  ": open,
          })}>  Müzik
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
            <Menu.Items >
               {musicMenu.map((item,i) => (
              <Menu.Item key={i}>
                {({ active }) => (
                  <div className="pl-3 p-1">
                    <Link
                        className={`${active && item.activeClass} flex `}
                        to={item.link}
                      >
                        {item.title}
                      </Link>
                  </div>
                )}
              </Menu.Item>
               ))} 
             
            </Menu.Items>
          </div>
        )}
      </Menu>
    </div>
  );
}

export default Music;

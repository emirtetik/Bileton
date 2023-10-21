import { Menu } from "@headlessui/react";
import classNames from "classnames";
import { NavLink } from "react-router-dom";
import { sceneMenu } from "../../../../constant";

const Scene = () => {
  return (
    <div className="text-white">
    <Menu>
      {({ open }) => (
        <div>
          <Menu.Button className={classNames(' flex text-white   p-2 rounded-full items-center justify-between  w-full ',{
            " text-yellow-300  ": open,
          })}>
              Sahne
            <svg
              className={classNames({
                "rotate-180 text-yellow-300  ": open,
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
          <Menu.Items>
             {sceneMenu.map((item,i) => (
            <Menu.Item key={i}>
              {({ active }) => (
                <div className="pl-3 p-1">
                  <NavLink
                      className={`${active && item.activeClass}`}
                      to={item.link}
                    >
                      {item.title}
                    </NavLink>
                </div>
              )}
            </Menu.Item>
             ))} 
           
          </Menu.Items>
        </div>
      )}
    </Menu>
  </div>
  )
}

export default Scene
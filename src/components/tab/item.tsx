import React from "react";
import { ItemProps, TabContextTypes } from "./TabTypes";
import { useTab } from "./context";
import classNames from "classnames";

const Item: React.FC<ItemProps> = ({ children, id }) => {
  const activeContext = useTab();
  const { active, setActive } = activeContext as TabContextTypes;

  return (
    <button
     onClick={() => {
         setActive(id)
     }}
     className="flex-auto py-1 bg-black text-center border-r border-gray-200 last:border-r-0"
     type="button"
     id={id}
     >
      <div className={classNames("relative inline-flex items-center h-12   ",{
         'font-bold': active === id,
      })}>
        {children}
        {active === id && (
          <div className="absolute bottom-0 left-0 w-full h-1 bg-yellow-300 " />
        )}
      </div>
    </button>
  );
};

export default Item;

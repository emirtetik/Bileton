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
     className="flex-1 p-1 text-center border-r border-gray-200 bg-blue-500/50 bg-blur-sm last:border-r-0 hover:bg-blue-500/60"
     type="button"
     id={id}
     >
      <div className={classNames("relative inline-flex items-center h-8   ",{
         'font-bold': active === id,
      })}>
        {children}
        {active === id && (
          <div className="absolute bottom-0 left-0 w-full h-1 bg-white " />
        )}
      </div>
    </button>
  );
};

export default Item;

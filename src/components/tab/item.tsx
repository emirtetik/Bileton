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
     className="flex-1 p-1 rounded-full transition-all duration-300 text-center border-r border-secondary bg-fourth bg-blur-sm last:border-r-0 hover:bg-secondary shadow-dark "
     type="button"
     id={id}
     >
      <div className={classNames("relative inline-flex items-center h-10 font-raleway    ",{
         'font-bold ': active === id,
      })}>
        {children}
        {active === id && (
          <div className="absolute bottom-0 left-0 w-full h-1 bg-secondary " />
        )}
      </div>
    </button>
  );
};

export default Item;

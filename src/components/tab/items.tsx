import React from "react";
import { ItemsProps } from "./TabTypes";

const Items: React.FC<ItemsProps> = ({ children }) => {
  return <div className="flex ">{children}</div>;
};

export default Items;
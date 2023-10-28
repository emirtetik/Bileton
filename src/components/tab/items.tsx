import React from "react";
import { ItemsProps } from "./TabTypes";

const Items: React.FC<ItemsProps> = ({ children }) => {
  return <div className="flex rounded-full">{children}</div>;
};

export default Items;
import React from "react";
import { ContentProps } from "./TabTypes";

const Content: React.FC<ContentProps> = ({ children, id }) => {
  return <div id={id}>{children}</div>;
};

export default Content;
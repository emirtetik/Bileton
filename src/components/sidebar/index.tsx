import { useState } from "react";
import Menu from "./menu";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside
      className={`sticky z-10 top-0 flex flex-col transition-all duration-500 ease-in-out h-screen min-h-full ${
        isOpen ? "w-60" : "w-16"
      }`}
    >
      <Menu setIsOpen={setIsOpen} isOpen={isOpen} />
    </aside>
  );
};

export default SideBar;

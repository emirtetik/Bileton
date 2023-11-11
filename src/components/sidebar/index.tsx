import { useState } from "react";
import Menu from "./menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      className={`flex w-full z-10`}
    >
      <Menu setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
    </div>
  );
};

export default Header;

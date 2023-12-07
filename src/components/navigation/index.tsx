import { useState } from "react";
import Menu from "./menu";
import React from "react";

const Header = React.memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      className={`flex w-full z-50`}
    >
      <Menu setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
    </div>
  );
});

export default Header;

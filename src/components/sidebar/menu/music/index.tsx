// import { Menu } from "@headlessui/react";
// import classNames from "classnames";
// import { musicMenu } from "../../../../constant";
// import { Link } from "react-router-dom";
import DropDown from "../../../_coreComponent/headless/dropDown"


const Music = () => {
  return (
    <div className="">
      <DropDown
      shadow="shadow-light"
      width="w-full"
      background="bg-black"
      className="font-normal text-white font-raleway "
        title="Müzik"
        list={[
          { name: "Müzik" },
          { name: "Spor" },
          { name: "Eğlence" },
          { name: "Sanat" },
          { name: "Eğitim" },
          { name: "Sağlık" },
          { name: "Teknoloji" },
          { name: "Diğer" },
        ]}
      />
    </div>
  );
}

export default Music;

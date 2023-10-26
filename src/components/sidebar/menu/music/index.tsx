// import { Menu } from "@headlessui/react";
// import classNames from "classnames";
// import { musicMenu } from "../../../../constant";
// import { Link } from "react-router-dom";
import DropDown from "../../../_coreComponent/headless/dropDown";

const Music = () => {
  return (
    <div className="">
      <DropDown
        linkActive={true}
        shadow="shadow-light"
        width="w-full"
        background="bg-black"
        className="text-white "
        title="Müzik"
        list={[
          { name: "Rock" },
          { name: "Pop" },
          { name: "Rap" },
          { name: "Klasik" },
        ]}
      />
    </div>
  );
};

export default Music;

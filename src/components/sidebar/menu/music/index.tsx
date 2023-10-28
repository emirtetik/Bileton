// import { Menu } from "@headlessui/react";
// import classNames from "classnames";
// import { musicMenu } from "../../../../constant";
// import { Link } from "react-router-dom";
import DropDown from "../../../_coreComponent/headless/dropDown";
// import { CategoryService } from "../../../../services/CategoryService";
// import useSWR from "swr";
// import { category } from "../../../../types";
// const fetcher = () => CategoryService.getAll();

const Music = () => {
  // const { data } = useSWR("categories", fetcher);

  return (
    <div className="">
      <DropDown
        linkActive={true}
        shadow="shadow-dark"
        width="w-full"
        background="bg-secondary"
        className="text-fourth  "
        title="Müzik"
        // list={data.map((category: category) => ({ name: category.name }))}
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

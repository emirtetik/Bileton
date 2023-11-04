// import { Menu } from "@headlessui/react";
// import classNames from "classnames";
// import { musicMenu } from "../../../../constant";
// import { Link } from "react-router-dom";
import DropDown from "../../../_coreComponent/headless/dropDown";
import { CategoryService } from "../../../../services/CategoryService";
import useSWR from "swr";
import { category } from "../../../../types";
const fetcher = () => CategoryService.getAll();

const Music = () => {
  const { data, isLoading, error } = useSWR("categories", fetcher);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>failed to load</div>;

  return (
    <div className="">
      <DropDown
        linkActive={true}
        shadow="shadow-dark"
        width="w-full"
        background="bg-white"
        className="text-white px-4  "
        title="Category"
        type="category"
        list={data.map((category: category) => ({ name: category.name }))}
        // list={[
        //   { name: "Rock" },
        //   { name: "Pop" },
        //   { name: "Rap" },
        //   { name: "Klasik" },
        // ]}
      />
    </div>
  );
};

export default Music;

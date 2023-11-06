import MuiTextField from "../mui/textfield";
import DropDown from "../headless/dropDown";
import MuiButton from "../mui/button";
import { BiSearchAlt } from "react-icons/bi";
import { event, searchProps } from "../../../types";
import { useState } from "react";


function onlyUnique(value: string, index: number, array: string[]): boolean {
  return array.indexOf(value) === index;
}


const FilterBar = (props: {
  search: searchProps;
  setSearch: (search: searchProps) => void;
  events: event[];
  onSearch: () => void;
  isLoading: boolean;
  error: unknown;
}) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const uniqueLocation = (props.events
    ?.map((event: event) => event.location) as string[])
    .filter(onlyUnique);
const uniqueCategory = (props.events
    ?.map((event: event) => event.category) as string[])
    .filter(onlyUnique);
  const handleSearch = () => {
    props.onSearch();
    setSelectedCategory("");
    setSelectedLocation("");
  };

  if (props.error) return <div>failed to load</div>;
  if (props.isLoading) return <div>loading...</div>;
  return (
    <div className="flex flex-row flex-wrap items-center justify-around gap-2 mt-3 mb-1 bg-gray-100 rounded-lg space-x-14">
      <DropDown
        onclick={(value) => {
          setSelectedCategory(value);
          props.setSearch({ ...props.search, category: value });
        }}
        type="button"
        shadow="shadow-dark"
        width="w-32"
        background="bg-gray-200 "
        className="text-fourth  w-[20%]"
        title={selectedCategory || "Categories"}
        list={uniqueCategory.map((category: string) => ({ name: category }))}
      />

      <MuiTextField
        variant="standard"
        type={"date"}
        value={props.search.startDate}
        onChange={(value) =>
          props.setSearch({ ...props.search, startDate: value.target.value })
        }
        className=""
      />
      <MuiTextField
        variant="standard"
        type={"date"}
        value={props.search.endDate}
        onChange={(value) =>
          props.setSearch({ ...props.search, endDate: value.target.value })
        }
        className=""
      />

      <DropDown
        onclick={(value) => {
          setSelectedLocation(value);
          props.setSearch({ ...props.search, location: value });
        }}
        type="button"
        shadow="shadow-dark"
        width="w-32"
        background="bg-gray-200 w-[20%]"
        title={selectedLocation || "Locations"}
        list={uniqueLocation.map((location: string) => ({ name: location }))}
      />

      <MuiButton
        onClick={handleSearch}
        variant="contained"
        color="primary"
        size="small"
      >
        <BiSearchAlt className="w-6 h-6 " />
      </MuiButton>
    </div>
  );
};

export default FilterBar;

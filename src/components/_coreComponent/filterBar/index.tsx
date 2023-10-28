import MuiTextField from "../mui/textfield";
import DropDown from "../headless/dropDown";
import MuiButton from "../mui/button";
import {BiSearchAlt} from "react-icons/bi";
import { event, searchProps } from "../../../types";

const FilterBar = (props: {
  search: searchProps;
  setSearch: (search: searchProps) => void;
  events: event[];
}) => {
  const search = (): void => {
    console.log("Başlangıç Tarihi: " + props.search.startDate);
    console.log("Bitiş Tarihi: " + props.search.endDate);
  };
  return (
    <div className="flex flex-row items-center justify-around  my-3 bg-secondary rounded-2xl shadow-dark">
      <DropDown
        onclick={(value) =>
          props.setSearch({ ...props.search, category: value })
        }
        shadow="shadow-dark"
        width="w-32"
        background="bg-gray-200 "
        className="text-fourth "
        title="Categories"
        // list={props.events.map((event: any) => ({
        //   name: event.category,
        // }))}
        list={[
          { name: "Müzik" },
          { name: "Eğlence" },
          { name: "Sanat" },
          { name: "Eğitim" },
          { name: "Sağlık" },
          { name: "Teknoloji" },
          { name: "Diğer" },
        ]}
      />

      <MuiTextField
        variant="standard"
        type={"date"}
        value={props.search.startDate}
        onChange={(value) =>
          props.setSearch({ ...props.search, startDate: value })
        }
      />
      <MuiTextField
        variant="standard"
        type={"date"}
        value={props.search.endDate}
        onChange={(value) =>
          props.setSearch({ ...props.search, endDate: value })
        }
      />

      <DropDown
        onclick={(value) =>
          props.setSearch({ ...props.search, location: value })
        }
        shadow="shadow-dark"
        width="w-32"
        background="bg-gray-200 "
        title="Locations"
        // list={props.events.map((event: event) => ({
        //   name: event.location,
        // }))}
        list={[{ name: "İstanbul" }, { name: "Ankara" }, { name: "İzmir" }]}
      />

      <MuiButton variant="contained" color="primary" size="small" onClick={search}>
         <BiSearchAlt className="w-6 h-6  "/>
      </MuiButton>
    </div>
  );
};

export default FilterBar;

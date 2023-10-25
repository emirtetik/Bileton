import React, { useState } from "react";
import MuiTextField from "../mui/textfield";
import DropDown from "../headless/dropDown";
import MuiButton from "./button";
const FilterBar: React.FC = () => {
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  const search = (): void => {
    console.log("Başlangıç Tarihi: " + startDate);
    console.log("Bitiş Tarihi: " + endDate);
  };
  return (
    <div className="flex flex-row items-center justify-around p-3 ">
      <DropDown
      shadow="shadow-dark"
       width="w-32"
      background="bg-gray-200 "
      className="text-black "
        title="Categories"
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

      <MuiTextField
        variant="standard"
        type={"date"}
        value={startDate}
        onChange={(value) => setStartDate(value)}
      />
      <MuiTextField
        variant="standard"
        type={"date"}
        value={endDate}
        onChange={(value) => setEndDate(value)}
      />

      <DropDown
      shadow="shadow-dark"
      width="w-32"
        background="bg-gray-200 "
        title="Locations"
        list={[{ name: "İstanbul" }, { name: "Ankara" }, { name: "İzmir" }]}
      />

      <MuiButton
        variant="text"
        color="primary"
        size="small"
        onClick={search}
      >
        Ara
      </MuiButton>
    </div>
  );
};

export default FilterBar;

import DropDown from "../../../_coreComponent/headless/dropDown";

const Scene = () => {
  return (
    <div className="">
      <DropDown
        linkActive={true}
        shadow="shadow-dark"
        width="w-full"
        background="bg-secondary"
        className="font-normal text-fourth font-raleway"
        title="Sahne"
        list={[
          { name: "Tüm Sahne Etkinlikleri" },
          { name: "Tiyatro" },
          { name: "Stand-up" },
          { name: "Gösteri" },
        ]}
      />
    </div>
  );
};

export default Scene;

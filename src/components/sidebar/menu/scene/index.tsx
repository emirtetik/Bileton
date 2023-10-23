import DropDown from "../../../_coreComponent/headless/dropDown"


const Scene = () => {
  return (
    <div className="text-white">
     <DropDown
     shadow="shadow-light"
     width="w-full"
      background="bg-black"
      className="text-white "
        title="Sahne"
        list={[
          { name: "Tüm Sahne Etkinlikleri" },
          { name: "Tiyatro" },
          { name: "Stand-up" },
          { name: "Gösteri" },
        ]}
      />
  </div>
  )
}

export default Scene
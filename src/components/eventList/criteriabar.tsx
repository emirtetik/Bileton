import DropDown from "./dropDown";

const CriteriaBar = () => {
  return (
    <div className=" flex gap-4 ">
      <div>
        <h2 className="text-gray-600 font-semibold">Event List</h2>
        <span className="text-xs">All Events</span>
      </div>
      <div className="flex items-center justify-between flex-1">
        <div className="flex ">
          <div className="lg:ml-10  ">
            <DropDown
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
          </div>
          <div className="lg:ml-10 ">
            <DropDown
              title="Locations"
              list={[
                { name: "İstanbul" },
                { name: "Ankara" },
                { name: "İzmir" },
              ]}
            />
          </div>
        </div>
        <div className="flex bg-gray-50 items-center p-2 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            />
          </svg>
          <input
            className="bg-gray-50 outline-none ml-1 block "
            type="text"
            name=""
            id=""
            placeholder="search..."
          />
        </div>
      </div>
    </div>
  );
};

export default CriteriaBar;

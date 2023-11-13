import { BiSearchAlt } from "react-icons/bi";
import { CustomModal } from "../../_coreComponent/customModal";
// import { EventService } from "../../../services/EventService";
// import useSWR from "swr";
import { useState } from "react";
// import { event } from "../../../types";
import { Link } from "react-router-dom";
import { cardList as data } from "../../../constant";
import { IoLocationOutline } from "react-icons/io5";

function slugify(str: string) {
  return String(str)
    .normalize("NFKD") // split accented characters into their base characters and diacritical marks
    .replace(/[\u0300-\u036f]/g, "") // remove all the accents, which happen to be all in the \u03xx UNICODE block.
    .trim() // trim leading or trailing whitespace
    .toLowerCase() // convert to lowercase
    .replace(/[^a-z0-9 -]/g, "") // remove non-alphanumeric characters
    .replace(/\s+/g, "-") // replace spaces with hyphens
    .replace(/-+/g, "-"); // remove consecutive hyphens
}

type SearchProps = {
  isModalOpen: boolean;
  onClose: () => void;
};

// const fetcher = () => EventService.getAll();

const SearchModal = (props: SearchProps) => {
  // const { data, error } = useSWR("search", fetcher, {
  //   revalidateIfStale: false,
  //   revalidateOnFocus: false,
  //   revalidateOnReconnect: false,
  // });
  const [inputValue, setInputValue] = useState("");
  const [listOpen, setListOpen] = useState(false);
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setListOpen(true);
  };

  // if (error) return <div>failed to load</div>;
  // if (!data) return <div>Loading...</div>;
  const filtered = data.filter((item) => {
    return (
      item.title && item.title.toLowerCase().includes(inputValue.toLowerCase())
    );
  });

  return (
    <CustomModal
      isModalOpen={props.isModalOpen}
      onClose={props.onClose}
      className="bg-white "
    >
      <div className="flex flex-col justify-center max-w-5xl mx-10 mt-10">
        <h1 className="mb-4 font-extrabold text-left text-black font-raleway text-title">
          Arama
        </h1>
        <div className="relative  w-11/12">
          <div className="relative flex flex-row">
            <BiSearchAlt className="absolute top-2 w-6 h-6 text-black " />
            <input
              className="w-full p-2 pl-10 pr-2 font-bold text-black border-b border-black outline-none text-text font-raleway"
              type="text"
              placeholder="Mekan, tür, etkinlik veya anahtar kelime"
              onChange={onInputChange}
              value={inputValue}
            />
          </div>

          <div className="relative ">
            {listOpen && (
              <div className="w-[95%] mx-6 p-2 mt-2 z-10  overflow-auto font-medium text-black rounded-md text-text font-raleway ">
                {filtered?.map((item, i: number) => (
                  <div
                    key={i}
                    className="px-2 rounded-sm hover:bg-gray-200 cursor-pointer"
                    onClick={() => {
                      setListOpen(false);
                      setInputValue("");
                    }}
                  >
                    <Link
                      to={`/event/${slugify(item.title)}`}
                      className="block"
                    >
                      <div className="flex flex-row gap-4 p-3">
                        <img
                          className="h-[150px] w-[150px] rounded-xl"
                          src={item.img}
                          alt=""
                        />
                        <div className="py-1">
                          <h1 className="font-bold text-black">{item.title}</h1>
                          <h1 className="text-sm text-gray-500">{item.time}</h1>
                        </div>
                        <div className="text-sm ml-20 py-4 flex flex-row gap-2">
                          <IoLocationOutline />
                          <h1>{item.venue} </h1>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </CustomModal>
  );
};

export default SearchModal;

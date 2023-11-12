import { BiSearchAlt } from "react-icons/bi";
import { CustomModal } from "../../_coreComponent/customModal";
import { EventService } from "../../../services/EventService";
import useSWR from "swr";
import { useState } from "react";
import { event } from "../../../types";
import { Link } from "react-router-dom";

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

const fetcher = () => EventService.getAll();

const SearchModal = (props: SearchProps) => {
  const { data, error } = useSWR("search", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  const [inputValue, setInputValue] = useState("");
  const [listOpen, setListOpen] = useState(false);
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setListOpen(true);
  };

  if (error) return <div>failed to load</div>;
  if (!data) return <div>Loading...</div>;
  const filtered = data.filter((item: event) => {
    return item.name && item.name.toLowerCase().includes(inputValue.toLowerCase());
  });

  return (
    <CustomModal
      isModalOpen={props.isModalOpen}
      onClose={props.onClose}
      className="bg-white "
    >
      <div className="flex flex-col justify-center max-w-5xl mx-auto mt-10">
        <h1 className="mb-4 font-extrabold text-left text-black font-raleway text-title">
          Arama
        </h1>
        <div className="relative w-11/12">
          <input
            className="w-full p-2 pl-10 pr-2 font-bold text-black border-b border-black outline-none text-text font-raleway"
            type="text"
            placeholder="Mekan, tür, etkinlik veya anahtar kelime"
            onChange={onInputChange}
            value={inputValue}
          />
          <BiSearchAlt className="absolute w-6 h-6 text-black transform -translate-y-1/2 left-2 top-1/2 " />
          <div className="relative ">
            {listOpen && (
              <div className="absolute w-56 mx-6 p-2 mt-2 z-10 \ overflow-auto font-medium text-black rounded-md text-text font-raleway h-48 bg-fifth">
                {filtered?.map((item: event, i: number) => (
                  <div
                    key={i}
                    className="px-2 rounded-sm hover:bg-secondary"
                    onClick={() => {
                      setListOpen(false);
                      setInputValue("");
                    }}
                  >
                    <Link to={`/event/${slugify(item.name)}`} className="block">
                      {item.name}
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

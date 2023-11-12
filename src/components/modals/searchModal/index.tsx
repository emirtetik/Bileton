import { BiSearchAlt } from "react-icons/bi";
import { CustomModal } from "../../_coreComponent/customModal";
import { EventService } from "../../../services/EventService";
import useSWR from "swr";
import { useState } from "react";
import {searchModalProps} from "../../../types";
type SearchProps = {
  isModalOpen: boolean;
  onClose: () => void;
};

const fetcher = () => EventService.getAll()

const SearchModal = (props: SearchProps) => {
  const { data, error, isLoading } = useSWR("search", fetcher);
  const [search, setSearch] = useState("")
  
  console.log(data);
  
  const filteredData = data ? data.filter((item:searchModalProps) => {
    return (
      (item.venue && item.venue.toLowerCase().includes(search.toLowerCase())) ||
      (item.city && item.city.toLowerCase().includes(search.toLowerCase())) ||
      (item.eventDate && item.eventDate.toLowerCase().includes(search.toLowerCase())) ||
      (item.category && item.category.toLowerCase().includes(search.toLowerCase())) ||
      (item.name && item.name.toLowerCase().includes(search.toLowerCase()))
    );
  }) : [];
  
  if (error) return <div>Failed to load</div>
  if (isLoading) return <div>Loading...</div>

  return (
    <CustomModal
    isModalOpen={props.isModalOpen}
      onClose={props.onClose}
      className="bg-white "
    >
      <div className="flex flex-col justify-center max-w-5xl mx-auto mt-10">
        <h1 className="mb-4 font-extrabold text-left text-black font-raleway text-title">Arama</h1>
        <div className="relative w-11/12">
        <input
          className="w-full p-2 pl-10 pr-2 font-bold text-black border-b border-black outline-none text-text font-raleway"
          type="text"
          placeholder="Mekan, tür, etkinlik veya anahtar kelime" 
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <BiSearchAlt className="absolute w-6 h-6 text-black transform -translate-y-1/2 left-2 top-1/2 "/>
        {filteredData.map((item:searchModalProps, index:number) => (
  <div key={index}>
    <div className="text-black ">
       <h1>{item.name}</h1>
       <p>{item.city}</p>
       <p>{item.venue}</p>
       <p>{item.eventDate}</p>
       <p>{item.category}</p>
    </div>
  </div>
))}
        </div>
      </div>
    </CustomModal>
  );
};

export default SearchModal;

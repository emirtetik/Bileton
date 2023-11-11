import { BiSearchAlt } from "react-icons/bi";
import { CustomModal } from "../../_coreComponent/customModal";

type SearchProps = {
  isModalOpen: boolean;
  onClose: () => void;
};

const SearchModal = (props: SearchProps) => {
  return (
    <CustomModal
    isModalOpen={props.isModalOpen}
      onClose={props.onClose}
      className="bg-white "
    >
      <div className="flex flex-col justify-center mt-10 ">
        <h1 className="mb-4 font-extrabold text-left text-black font-raleway text-title">Arama</h1>
        <div className="relative w-11/12">
        <input
          className="w-full p-2 pl-10 pr-2 font-bold border-b border-black outline-none text-text font-raleway"
          type="text"
          placeholder="Mekan, tür, etkinlik veya anahtar kelime" 
        />
        <BiSearchAlt className="absolute w-6 h-6 text-black transform -translate-y-1/2 left-2 top-1/2 "/>
        </div>
      </div>
    </CustomModal>
  );
};

export default SearchModal;

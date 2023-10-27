import {  BiSearchAlt } from "react-icons/bi";

type SearchProps = {
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputValue: string
}

const Search = (props: SearchProps) => {
  return (
    <div className="flex items-center p-1 mt-3 border border-blue-500 rounded-md bg-gray-50">
     <BiSearchAlt className="w-6 h-6 text-black"/>
      <input
        onChange={props.onInputChange}
        className="block ml-1 font-bold outline-none bg-gray-50 text-text font-raleway"
        type="text"
        placeholder="search..."
        value={props.inputValue}
      />
    </div>
  );
};

export default Search;

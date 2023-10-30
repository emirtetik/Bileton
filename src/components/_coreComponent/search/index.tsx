import {  BiSearchAlt } from "react-icons/bi";

type SearchProps = {
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputValue: string
}

const Search = (props: SearchProps) => {
  return (
    <div className="flex items-center p-1 mt-3 border border-fifth rounded-md bg-secondary">
     <BiSearchAlt className="w-6 h-6 text-white "/>
      <input
        onChange={props.onInputChange}
        className="block pl-4 ml-1 font-bold outline-none rounded-full  text-text font-raleway"
        type="text"
        placeholder="search..."
        value={props.inputValue}
      />
    </div>
  );
};

export default Search;

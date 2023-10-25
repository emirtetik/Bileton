
const Search = () => {
  return (
    <div className="flex items-center p-1 mt-3 border border-blue-500 rounded-md bg-gray-50">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 text-gray-400"
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
      className="block ml-1 font-bold outline-none bg-gray-50 text-text font-raleway"
      type="text"
      name=""
      id=""
      placeholder="search..."
    />
  </div>
  )
}

export default Search
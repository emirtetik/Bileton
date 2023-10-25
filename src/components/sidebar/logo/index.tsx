import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <div className="">
    <Link to='/' className="flex items-center w-full">
      <div className="flex items-center">
        <h6 className="text-3xl font-bold text-blue-500 font-raleway ">
        Bileton
        </h6>
        <span className="ml-1 text-sm font-thin text-blue-200 font-raleway">"Tonla bilet"</span>
      </div>
    </Link>
    </div>
  );
}
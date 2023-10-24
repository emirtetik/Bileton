import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <div className="">
    <Link to='/' className="flex items-center w-full ">
      <div className="">
        <h6 className="text-3xl font-bold text-blue-500 ">
        Bileton
        <span className="ml-1 text-sm font-normal text-blue-200 ">"Tonla bilet"</span>
        </h6>
      </div>
    </Link>
    </div>
  );
}
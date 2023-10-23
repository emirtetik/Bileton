import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <div className="py-0.5">
    <Link to='/' className="w-[full] h-[3.25rem]  flex items-center  ">
      <div className="">
        <h6 className="text-blue-500  font-extrabold text-3xl ">
        Bileton
        <span className=" text-sm text-blue-200 font-normal ml-1 ">"Tonla bilet"</span>
        </h6>
      </div>
    </Link>
    </div>
  );
}
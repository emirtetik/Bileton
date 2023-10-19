import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <div className="py-0.5">
    <Link to='/' className="w-[full] h-[3.25rem]  flex items-center  ">
      <div className="">
        <h6 className="text-white/60 font-extrabold text-2xl uppercase ">
        Bileton
        <span className="text-white/20 text-sm font-thin lowercase ml-1 ">"Tonla bilet"</span>
        </h6>
      </div>
    </Link>
    </div>
  );
}
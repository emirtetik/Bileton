import { Link } from "react-router-dom";
import { items } from "../../../constant";

const TodayEvent = () => {
  return (
    <section className="max-w-6xl mx-auto mb-6 text-black h-52">
      <div className="max-w-4xl pt-10 mx-auto ">
        <div className="flex justify-between mb-4 ">
          <h6 className="text-2xl font-bold text-blue-500 uppercase before:border-r-4 before:border-blue-500 before:mr-3">Bugün Programı</h6>
          <h6 className="font-bold text-blue-500">24 agustos</h6>
        </div>
        <div className="flex items-center gap-5 rounded-2xl">
          <div className="text-[13px]">
            <svg
            className="text-blue-500"
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M12 7V12L14.5 10.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="bg-white/30 h-[1px] flex-1 flex justify-between rounded-full">
            {items.map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <button className="w-8 h-8 rounded-full flex items-center justify-center -top-3.5 relative transition-colors ">
                  <div className="w-3 h-3 mt-2 bg-blue-500 rounded-full"></div>
                </button>
                <div className="mb-3 text-center text-gray-500 ">{item.title}</div>
                <div className="w-[100px] text-center">{item.cardTitle}</div>
              </div>
            ))}
          </div>
          <div >
            <Link to="/" className="hover:text-blue-500">Tüm etkinlikler</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TodayEvent;

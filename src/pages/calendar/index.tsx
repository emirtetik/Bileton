import { BiCalendar, BiCategoryAlt } from "react-icons/bi";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { cardList } from "../../constant";
import { NavLink, useMatch } from "react-router-dom";
import { CiCircleList } from "react-icons/ci";
import Card from "../../components/_coreComponent/card";
import AosDiv from "../../components/_coreComponent/aosEffect";

const Calendar = () => {
  const matchEvents = useMatch("/events");
  const matchCategory = useMatch("/category");
  const matchCalendar = useMatch("/calendar");
  const activeClassEvents = matchEvents ? "text-yellow-500" : "";
  const activeClassCategory = matchCategory ? "text-yellow-500" : "";

  const activeClassCalendar = matchCalendar ? "text-yellow-500" : "";
  const [selectedDate, setSelectedDate] = useState(new Date());
  const onChange = (date: Date) => {
    setSelectedDate(date);
  };
  return (
    <div className="bg-no-repeat bg-contain bg-background-image-4">
      <div className="px-0 sm:px-20 pt-28 ">
        <h1 className="mb-4 text-2xl font-extrabold text-white font-raleway">
          Takvim
        </h1>
        <div className="flex items-center justify-end gap-4 px-10 mb-6 border-b border-white sm:py-2">
          <NavLink
            to={"/events"}
            className={`text-white flex items-center text-lg ${activeClassEvents}`}
          >
            <CiCircleList className={`w-4 h-3 ${activeClassEvents}`} />
            Liste
          </NavLink>
          <NavLink
            to={"/category"}
            className={`text-white flex items-center text-lg ${activeClassCategory}`}
          >
            <BiCategoryAlt className={`w-4 h-3 ${activeClassCategory}`} />
            Kategori
          </NavLink>
          <NavLink
            to={"/calendar"}
            className={`text-white flex items-center text-lg ${activeClassCalendar}`}
          >
            <BiCalendar className={`w-4 h-3 ${activeClassCalendar}`} />

            Takvim
          </NavLink>
        </div>
        {/* TAKVİM */}
        <div className="flex flex-col-reverse flex-wrap md:flex-row">
          <div className="w-full p-4 md:w-2/3">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 gap-x-10">
              {cardList.map((card, index: number) => (
                <AosDiv aosType="zoom-in" aosDuration={500} key={index} >
                  <Card
                    image={card.img}
                    title={card.title}
                    date={card.date}
                    time={card.time}
                    venue={card.venue}
                    size="medium"
                    // route={`/event/${card.name}-${card._id}`}
                  />
                </AosDiv>
              ))}
            </div>
          </div>
          <div className="relative w-1/5 p-4 text-right">

            <DatePicker
              selected={selectedDate}
              onChange={onChange}
              minDate={new Date()}
              inline
              showDisabledMonthNavigation
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;

// =======
//         <div className="flex flex-col-reverse md:flex-row">
//           <div className="w-4/5 p-4 ">
//             <div className="flex flex-row flex-wrap justify-between ">
//               {cardList.map((card, index: number) => (
//                 <div className="mb-20 " key={index}>
//                   <Card
//                     title={card.title}
//                     image={card.img}
//                     date={card.date}
//                     time={card.time}
//                     venue={card.venue}
//                     size="big"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="relative w-1/5 p-4 text-right ">
// >>>>>>> cb8c07d970488b66f68a9e9f3bb256131bcc102b
import { BiCalendar } from "react-icons/bi";
import { useState } from "react";
import { CustomModal } from "../../_coreComponent/customModal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { cardList } from "../../../constant";
import classNames from "classnames";

type CalendarProps = {
  isModalOpen: boolean;
  onClose: () => void;
};

const CalendarModal = (props: CalendarProps) => {
  const [activeTab, setActiveTab] = useState("calendar");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const onChange = (date: Date) => {
    setSelectedDate(date);
  };
  return (
    <CustomModal
      isModalOpen={props.isModalOpen}
      onClose={props.onClose}
      className=" bg-gradient-to-b from-black to-gray-800"
    >
      <div className=" w-full px-10 mt-10 ">
        <div className="px-0 sm:px-20">
          <h1 className="mb-4 font-extrabold  text-white font-raleway text-2xl">
            Takvim
          </h1>
          <div className="flex justify-end gap-4 border-b border-white items-center mb-6 px-10 sm:py-2">
            <button
              onClick={() => setActiveTab("list")}
              className={classNames("text-white ", {
                "font-bold text-yellow-500": activeTab === "list",
              })}
            >
              Liste
            </button>
            <button
              onClick={() => setActiveTab("calendar")}
              className={classNames("flex text-white", {
                "font-bold text-yellow-500": activeTab === "calendar",
              })}
            >
              <BiCalendar className="w-5 h-5 text-white" />
              Takvim
            </button>
          </div>
                                       {/* TAKVİM */}
          {activeTab === "calendar" && (
            <div className="flex flex-wrap flex-col-reverse md:flex-row">
              <div className="w-full md:w-2/3 p-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 gap-x-10">
                  {cardList.map((card, index: number) => (
                    <div key={index}>
                      <img
                        src={card.img}
                        alt={card.title}
                        className="w-full h-[15rem] rounded-lg "
                      />
                      <div className="mt-1 text-left">
                        <h2 className="font-medium truncate text-[18px]">
                          {card.title}
                        </h2>
                        <p className="text-sm text-gray-500">{card.date}</p>
                        <p className="text-sm text-gray-500">{card.time}</p>
                        <p className="text-sm text-gray-500">{card.venue}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full md:w-1/3 p-4 relative text-right">
                <DatePicker
                  selected={selectedDate}
                  onChange={onChange}
                  minDate={new Date()}
                  inline
                  showDisabledMonthNavigation
                  className=" "
                />
              </div>
            </div>
          )}
                                    {/* LİSTE */}
          {activeTab === "list" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 gap-x-10">
              {cardList.map((card, index: number) => (
                <div key={index}>
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-[15rem] rounded-lg "
                  />
                  <div className="mt-1 text-left">
                    <h2 className="font-medium truncate text-[18px]">
                      {card.title}
                    </h2>
                    <p className="text-sm text-gray-500">{card.date}</p>
                    <p className="text-sm text-gray-500">{card.time}</p>
                    <p className="text-sm text-gray-500">{card.venue}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </CustomModal>
  );
};

export default CalendarModal;

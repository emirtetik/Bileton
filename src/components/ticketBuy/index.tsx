import { cardList } from "../../constant";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlinePlace } from "react-icons/md";
const TicketBuy = () => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="px-0 sm:px-20 pt-28">
      <h1 className="mb-4 text-2xl font-extrabold text-white font-raleway">
        Ticket Buy
      </h1>
      <div className="flex items-center justify-end px-10 mb-6 border-b border-white sm:py-2"></div>
      <div className="flex flex-row">
        <div className="flex flex-row flex-wrap gap-4 w-3/4">
          {list.map((item, index) => (
            <div key={index} className=" w-[150px] h-[150px] bg-white">
              <p>{item}</p>
            </div>
          ))}
        </div>
        <div className="w-1/4 flex flex-col  items-start ">
          <div className="w-full bg-slate-600 h-full p-6">
            <div className="flex gap-6">
              <img src={cardList[0].img} className="w-[75px] h-[75px]" alt="" />
              <p>Selamlar</p>
            </div>
            <div className="flex items-center w-[100%] border-b my-4 border-white "></div>

            <div className="flex flex-col">
              <div className="flex flex-row gap-4 justify-start items-start ">
                <FaRegCalendarAlt />
                {cardList[0].date}
              </div>
              <div className="flex flex-row gap-4 justify-start items-start ">
                <MdOutlinePlace />
                {cardList[0].venue}
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-slate-900 w-full  p-8 gap-6 justify-between">
            <div className="flex flex-row gap-4 justify-between ">
              <div>Total :</div>
              <div>Price</div>
            </div>
            <div className="text-center bg-yellow-400 p-2 text-black">
              Purchase
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketBuy;

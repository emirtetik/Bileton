import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlinePlace } from "react-icons/md";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { useState } from "react";
import { EventService } from "../../services/EventService";
import useSWR from "swr";

const fetcher = () => EventService.getAll()
const TicketBuy = () => {
 const {data,isLoading,error} = useSWR("ticket",fetcher)
   
 if(isLoading){
  <div>loading</div>
 }
 if(error){
  <div>errorrr</div>
 }
  const [quantitiyof1stPhase, setQuantityof1stPhase] = useState(0);
  const [quantityofEarlyBird, setQuantityofEarlyBird] = useState(0);
  const [quantityofEarlyBackstage, setQuantityofEarlyBackstage] = useState(0);
  const [quantityofEarlyVIP, setQuantityofEarlyVIP] = useState(0);
  const totalTickets =
    quantitiyof1stPhase +
    quantityofEarlyBird +
    quantityofEarlyBackstage +
    quantityofEarlyVIP;
  const total =
    quantitiyof1stPhase * 700 +
    quantityofEarlyBird * 700 +
    quantityofEarlyBackstage * 700 +
    quantityofEarlyVIP * 700;

  const list = ["1st Phase", "Early Bird", "Early Bacstage", "Early VIP"];

  const handleQuantityof1stPhase = (what: string) => {
    if (what === "plus") {
      setQuantityof1stPhase((prev) => prev + 1);
    } else {
      setQuantityof1stPhase((prev) => prev - 1);
    }
  };
  const handleQuantityofEarlyBird = (what: string) => {
    if (what === "plus") {
      setQuantityofEarlyBird((prev) => prev + 1);
    } else {
      setQuantityofEarlyBird((prev) => prev - 1);
    }
  };

  const handleQuantityofEarlyBackstage = (what: string) => {
    if (what === "plus") {
      setQuantityofEarlyBackstage((prev) => prev + 1);
    } else {
      setQuantityofEarlyBackstage((prev) => prev - 1);
    }
  };

  const handleQuantityofEarlyVIP = (what: string) => {
    if (what === "plus") {
      setQuantityofEarlyVIP((prev) => prev + 1);
    } else {
      setQuantityofEarlyVIP((prev) => prev - 1);
    }
  };

  return (
    <div className="px-0 sm:px-20 pt-28">
      <h1 className="mb-4 text-2xl font-extrabold text-white font-raleway">
        {data[0].title}
      </h1>
      <div className="flex items-center justify-end px-10 mb-6 border-b border-white sm:py-2"></div>
      <div className="flex flex-row gap-4">
        <div className="flex flex-col flex-wrap items-center gap-4 w-3/4">
          <div className=" w-[70%] bg-gray-800 flex flex-row justify-between  p-4">
            <p>{list[0]}</p>
            <p>700$</p>
            <div className="flex flow-row gap-2 items-center justify-center">
              <button onClick={() => handleQuantityof1stPhase("plus")}>
                <FaMinus />
              </button>
              <p className="w-6 text-center">{quantitiyof1stPhase}</p>
              <button onClick={() => handleQuantityof1stPhase("minus")}>
                <FaPlus />
              </button>
            </div>
          </div>

          <div className=" w-[70%] bg-gray-800 flex flex-row justify-between  p-4">
            <p>{list[1]}</p>
            <p>700$</p>
            <div className="flex flow-row gap-2 items-center justify-center">
              <button onClick={() => handleQuantityofEarlyBird("plus")}>
                <FaMinus />
              </button>
              <p className="w-6 text-center">{quantityofEarlyBird}</p>
              <button onClick={() => handleQuantityofEarlyBird("minus")}>
                <FaPlus />
              </button>
            </div>
          </div>

          <div className=" w-[70%] bg-gray-800 flex flex-row justify-between  p-4">
            <p>{list[2]}</p>
            <p>700$</p>
            <div className="flex flow-row gap-2 items-center justify-center">
              <button onClick={() => handleQuantityofEarlyBackstage("plus")}>
                <FaMinus />
              </button>
              <p className="w-6 text-center">{quantityofEarlyBackstage}</p>
              <button onClick={() => handleQuantityofEarlyBackstage("minus")}>
                <FaPlus />
              </button>
            </div>
          </div>

          <div className=" w-[70%] bg-gray-800 flex flex-row justify-between  p-4">
            <p>{list[3]}</p>
            <p>700$</p>
            <div className="flex flow-row gap-2 items-center justify-center">
              <button onClick={() => handleQuantityofEarlyVIP("plus")}>
                <FaMinus />
              </button>
              <p className="w-6 text-center">{quantityofEarlyVIP}</p>
              <button onClick={() => handleQuantityofEarlyVIP("minus")}>
                <FaPlus />
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/4 flex flex-col  items-start ">
          <div className="w-full bg-slate-600 h-full p-6">
            <div className="flex gap-6">
              <img src={data[0].image} className="w-[75px] h-[75px]" alt="" />
              <p>Selamlar</p>
            </div>
            <div className="flex items-center w-[100%] border-b my-4 border-white "></div>

            <div className="flex flex-col">
              <div className="flex flex-row gap-4 justify-start items-start ">
                <FaRegCalendarAlt />
                {data[0].eventDate}
              </div>
              <div className="flex flex-row gap-4 justify-start items-start ">
                <MdOutlinePlace />
                {data[0].venue}
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-slate-900 w-full  p-8 gap-6 justify-between">
            <div className="flex flex-row gap-4 justify-between ">
              <div>Total Price:</div>
              <div>{total}$</div>
            </div>
            <div className="flex flex-row gap-4 justify-between ">
              <div>Total Tickets:</div>
              <div>{totalTickets}</div>
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

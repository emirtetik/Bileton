import AllEventCarousel from "./allEvent";
import ForYou from "./forYou";
import HotTicket from "./hotTicket";
import MonthCarousel from "./month";
import PopularCarousel from "./populer";

const Carousel = () => {
  return (
    <div className="space-y-6">
      <div>
        <PopularCarousel />
      </div>
      <div className="px-0 sm:px-12 space-y-6">
        <AllEventCarousel />
        <MonthCarousel />
      </div>
      <div className="border-t-4 border-b-4 border-yellow-500 ">
        <HotTicket />
      </div>
      <div className="  space-y- ml-[10px] px-[5%]">
        <ForYou />
      </div>
    </div>
  );
};

export default Carousel;

import CustomCarousel from "../../_coreComponent/customCarousel";
import { Navigation } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
// import { EventService } from "../../../services/EventService";
// import useSWR from "swr";
// import { event } from "../../../types";
import "swiper/css";
import "swiper/css/navigation";

import { cardList } from "../../../constant";

const AllEventCarousel = () => {
  return (
    <div className="font-raleway">
        <div className="flex items-center justify-between w-full px-3 sm:px-10 py-4"> 
         <h1 className="text-subtitle  font-medium">Sadece BILETON'da</h1>
         <div>
         <button>Tümü</button>
         </div>
        </div>
      <CustomCarousel
        modules={[Navigation]}
        navigation={true}
        spaceBetween={0}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          1024:{
            slidesPerView:6,
            spaceBetween: 0
          }
        }}
        className="relative allevent-carousel"
      >
        <div className="w-full ">
          {cardList.map((card, index: number) => (
            <SwiperSlide key={index}>
              <img
                src={card.img}
                alt={card.title}
                className="w-11/12 mx-auto h-[15rem] rounded-lg "
              />
              
              <div className="z-20 px-3 mt-1 text-left">
                <h2 className="font-medium truncate text-[18px]">{card.title}</h2>
                <p className="text-sm text-gray-500">{card.date}</p>
                <p className="text-sm text-gray-500">{card.time}</p>
                <p className="text-sm text-gray-500">{card.venue}</p>
              </div>
              <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent"></div>
            </SwiperSlide>
          ))}
        </div>
      </CustomCarousel>
    </div>
  );
};

export default AllEventCarousel;

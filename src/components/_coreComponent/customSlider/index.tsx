import CustomCarousel from "../customCarousel";
import { SwiperSlide } from "swiper/react";
import { BsChevronRight } from "react-icons/bs";
import "swiper/css";
import "swiper/css/navigation";
import { event } from "../../../types";
import { cardList } from "../../../constant";
import Card from "../card";
import AosDiv from "../aosEffect";
import SliderButtons from "./sliderNavButtons";

// import EventCard from "../eventCard";

const CustomSlider = (props: { events: event[]; title: string }) => {
  return (
    <div className="font-raleway relative  w-[100%] my-6 text-gray-300">
      <div className="absolute text-6xl z1 grad bg-gradient-to-r pointer-events-none from-black to-transparent w-[40%] h-[90%] top-10"></div>
      <div className="absolute text-6xl z1 grad bg-gradient-to-l pointer-events-none from-black to-transparent w-[40%] h-[90%] top-10 right-[0]"></div>

      <div className="flex items-center justify-between w-full px-8 py-4">
        <h1 className="font-medium text-subtitle ">{props.title}</h1>
        <div className="flex flex-row  items-center px-6 gap-1 text-lg justify-center">
          <button className="text-sm">See All</button>
          <div className=" text-xl text-gray-400">
            <BsChevronRight />
          </div>
        </div>
      </div>
      <CustomCarousel
        spaceBetween={20}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
        className="relative allevent-carousel "
      >
        {cardList.map((card, index: number) => (
          <SwiperSlide key={index}>
            <AosDiv aosType="fade-left" aosDuration={900}>
              <Card
                title={card.title}
                size="medium"
                image={card.img}
                time={card.time}
                venue={card.venue}
                // route={}
              />
            </AosDiv>
          </SwiperSlide>
        ))}
        <SliderButtons />
      </CustomCarousel>
    </div>
  );
};

export default CustomSlider;

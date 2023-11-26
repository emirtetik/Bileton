import CustomCarousel from "../customCarousel";
import { SwiperSlide } from "swiper/react";
import { BsChevronRight } from "react-icons/bs";
import "swiper/css";
import "swiper/css/navigation";
import { event } from "../../../types";
import Card from "../card";
import AosDiv from "../aosEffect";
import SliderButtons from "./sliderNavButtons";
import { Link } from "react-router-dom";

function slugify(str: string) {
  return String(str)
    .normalize("NFKD") // split accented characters into their base characters and diacritical marks
    .replace(/[\u0300-\u036f]/g, "") // remove all the accents, which happen to be all in the \u03xx UNICODE block.
    .trim() // trim leading or trailing whitespace
    .toLowerCase() // convert to lowercase
    .replace(/[^a-z0-9 -]/g, "") // remove non-alphanumeric characters
    .replace(/\s+/g, "-") // replace spaces with hyphens
    .replace(/-+/g, "-"); // remove consecutive hyphens
}

const CustomSlider = (props: { events: event[]; title: string }) => {
  return (
    <div className="font-raleway relative  w-[100%] my-6 text-gray-300">
      <div className="absolute text-6xl z1 grad bg-gradient-to-r pointer-events-none from-black to-transparent w-[40%] h-[90%] top-10"></div>
      <div className="absolute text-6xl z1 grad bg-gradient-to-l pointer-events-none from-black to-transparent w-[40%] h-[90%] top-10 right-[0]"></div>

      <div className="flex items-center justify-between w-full px-8 py-4 ">
        <h1 className="font-medium text-subtitle ">{props.title}</h1>

        <div className="flex flex-row items-center justify-center gap-1 px-6 text-lg">
          <Link to="/events" className="text-sm hover:text-yellow-500">
            Tümü
          </Link>
          <div className="text-xl text-gray-400 ">
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
        className="relative"
      >
        {props.events.map((card: event, index: number) => (
          <SwiperSlide key={index}>
            <AosDiv aosType="fade-left" aosDuration={900}>
              <Card
                title={card.name}
                size="medium"
                image={card.image}
                time={`${card.startTime}-${card.endTime}`}
                venue={card.venue}
                route={`event/${slugify(`${card.name} ${card._id}`)}`}
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

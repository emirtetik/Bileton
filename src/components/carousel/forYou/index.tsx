import CustomCarousel from "../../_coreComponent/customCarousel";
import { Navigation } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { cardList } from "../../../constant";

const ForYou = () => {
  return (
    <div className="font-raleway relative my-6">
      <div className="absolute z-[2] bg-gradient-to-r  from-black to-red w-[22%] h-[90%] top-10"></div>
      <div className="absolute z-[2] bg-gradient-to-l  from-black to-red w-[12%] h-[90%] top-10 right-0"></div>
      <div className="flex items-center justify-between w-full py-4">
        <h1 className="font-medium text-subtitle ">Sizin İçin Seçtiklerimiz</h1>
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
        <div className="w-full">
          {cardList.map((card, index: number) => (
            <SwiperSlide key={index}>
              <img
                src={card.img}
                alt={card.title}
                className="w-[250px] h-[250px] rounded-lg "
              />

              <div className="z-20 pt-3 text-left">
                <h2 className="font-medium  text-[18px]">{card.title}</h2>
                <p className="text-sm text-gray-500">{card.date}</p>
                <p className="text-sm text-gray-500">{card.time}</p>
                <p className="text-sm text-gray-500">{card.venue}</p>
              </div>
              <div className="absolute inset-y-0 right-0 w-24 "></div>
            </SwiperSlide>
          ))}
        </div>
      </CustomCarousel>
    </div>
  );
};

export default ForYou;

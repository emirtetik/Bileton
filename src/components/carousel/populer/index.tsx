import { SwiperSlide } from "swiper/react";
// import { EventService } from "../../../services/EventService";
// import useSWR from "swr";
// import { event } from "../../../types";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import CustomCarousel from "../../_coreComponent/customCarousel";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { cardList } from "../../../constant";

// const fetcher = () => EventService.getAll();
const PopularCarousel = () => {
  //   const { data, error, isLoading } = useSWR("PopularEvent", fetcher);

  //   if (isLoading) {
  //     return <div>..Loading</div>;
  //   }
  //   if (error) {
  //     return <div>...failed</div>;
  //   }
  //   const cards = data.slice(-5);

  return (
    <CustomCarousel
      modules={[Pagination, Navigation, EffectCoverflow]}
      effect={"coverflow"}
      grabCursor={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      navigation={true}
      pagination={true}
      className="populer-carousel"
    >
      <div className="w-full ">
        {cardList.map((card, index: number) => (
          <SwiperSlide key={index}>
            <img
              src={card.img}
              alt={card.title}
              className="w-11/12 mx-auto md:h-[28rem] sm:h-[26rem] h-[25rem] rounded-2xl shadow-dark"
            />
          </SwiperSlide>
        ))}
      </div>
    </CustomCarousel>
  );
};

export default PopularCarousel;

import { SwiperSlide } from "swiper/react";
import { event } from "../../../types";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import CustomCarousel from "../../_coreComponent/customCarousel";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import Card from "../card";
import AosDiv from "../aosEffect";
const BigCarousel = (props: { events: event[]; title: string }) => {
  console.log("events", props);
  return (
    <div className="relative w-full px-4 my-6 text-gray-300 font-raleway">
      <div className="flex items-center justify-between py-4 ">
        <h1 className="px-20 font-bold text-subtitle">{props.title}</h1>
      </div>
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
          {props.events.map((card: event, index: number) => (
            <SwiperSlide key={index}>
              <AosDiv aosType="fade-up" aosDuration={800}>
                <Card image={card.image} alt={card.name} size="large" />
              </AosDiv>
            </SwiperSlide>
          ))}
        </div>
      </CustomCarousel>
    </div>
  );
};

export default BigCarousel;

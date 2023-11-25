import { SwiperSlide } from "swiper/react";
import { EventService } from "../../../services/EventService";
import useSWR from "swr";
import { event } from "../../../types";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import CustomCarousel from "../../_coreComponent/customCarousel";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import Card from "../card";
// import AosDiv from "../aosEffect";
const fetcher = () => EventService.getAll();
const BigCarousel = (props: { events?: event[]; title?: string }) => {
    const { data, error, isLoading } = useSWR("PopularEvent", fetcher);

    if (isLoading) {
      return <div>..Loading</div>;
    }
    if (error) {
      return <div>...failed</div>;
    }
    const cards = data.slice(-5);

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
          {cards.map((card:event, index: number) => (
            <SwiperSlide >
              {/* <AosDiv aosType="fade-up" aosDuration={800} > */}
                <Card image={card.image} alt={card.name} size="large" key={index}/>
              {/* </AosDiv> */}
            </SwiperSlide>
          ))}
        </div>
      </CustomCarousel>
    </div>
  );
};

export default BigCarousel;

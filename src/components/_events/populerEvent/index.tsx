import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import MuiButton from "../../_coreComponent/mui/button";
import { EventService } from "../../../services/EventService";
import useSWR from "swr";
import { event } from "../../../types";
import "swiper/css";
import EventCard from "../../_coreComponent/eventCard";

const fetcher = () => EventService.getAll();
const PopularEvent = () => {
  const { data, error, isLoading } = useSWR("PopularEvent", fetcher);

  if (isLoading) {
    return <div>..Loading</div>;
  }
  if (error) {
    return <div>...failed</div>;
  }
  const cards = data.slice(-5);

  return (
    <div className="flex flex-col items-center justify-center max-w-2xl gap-5 p-4 mx-auto mt-0 sm:mt-10 lg:max-w-7xl md:max-w-4xl ">
      <div className="flex flex-col items-start justify-between w-full mt-4 sm:flex-row sm:items-center ">
        <h6 className="font-bold text-primary font-raleway text-title ">
          Etkinlikler
        </h6>
        <MuiButton variant="text" size="small" onClick={() => {}}>
          events
        </MuiButton>
      </div>

      <h5 className="w-full font-bold text-left text-black/50 font-raleway text-subtitle ">
        Populer etkinlikler
      </h5>
      <div className="w-full ">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={4}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            "320": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "640": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "1284": {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          className="w-full"
        >
          {cards.map((card: event, index: number) => (
            <SwiperSlide key={index}>
              <EventCard key={index} card={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PopularEvent;

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import MuiButton from "../../_coreComponent/mui/button";
import { EventService } from "../../../services/EventService";
import useSWR from "swr";
import { event } from "../../../types";
import "swiper/css";

// interface PopularEventProps {
//   title: string;
//   img: string;
//   date: string;
//   location:string
// }
const fetcher = () => EventService.getAll();
const PopularEvent = () => {
  const { data, error, isLoading } = useSWR("PopulerEvent", fetcher);

  if (isLoading) {
    return <div>..Loading</div>;
  }
  if (error) {
    return <div>...failed</div>;
  }
  const cards = data.slice(-5);
  // const popularEvents = data.filter((event: PopularEventProps) => event.popular);

  // const cards = [
  //   {
  //     title: "Film Festivali 2010",
  //     description: "Ankara, TR",
  //     img: "https://filmfestankara.org.tr//uploads/__category/029.jpg",
  //     date: "10 AUG",
  //   },
  //   {
  //     title: "Tropical Festivali 2025",
  //     description: "İstanbul, TR",
  //     img: "https://i.pinimg.com/236x/7d/d3/f1/7dd3f1108e0b5822aaf5defa27e562d5.jpg",
  //     date: "10 AUG",
  //   },
  //   {
  //     title: "Caz Festivali 2020",
  //     description: "İstanbul, TR",
  //     img: "https://cazkolik.com/storage/gorseller/20120608_021301.jpg",
  //     date: "10 AUG",
  //   },
  //   {
  //     title: "Caz Festivali 2025",
  //     description: "İstanbul, TR",
  //     img: "https://cazkolik.com/storage/gorseller/20120608_021341.jpg",
  //     date: "10 AUG",
  //   },
  //   {
  //     title: "Dans Festivali 2025",
  //     description: "İstanbul, TR",
  //     img: "https://marketplace.canva.com/EAExRafOmWE/1/0/1131w/canva-gri-ill%C3%BCstrasyon-dans-festivali-posteri-26SP97CNeOs.jpg",
  //     date: "10 AUG",
  //   },
  //   {
  //     title: "Caz Festivali 2025",
  //     description: "İstanbul, TR",
  //     img: "https://i.pinimg.com/originals/7e/99/9b/7e999ba5942bf7e1816ed609824bad78.jpg",
  //     date: "10 AUG",
  //   },
  // ];

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
          spaceBetween={50}
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
            "768": {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            "1024": {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          className="w-full"
        >
          {cards.map((card: event, index: number) => (
            <SwiperSlide key={index}>
              <div className="text-black bg-third w-[250px] h-[250px] rounded-md shadow-lg border border-fifth  hover:shadow-dark mb-3 hover:bg-primary hover:text-white cursor-pointer transition-colors">
                <div className="relative z-10 flex items-center justify-center ">
                  <div className="absolute p-2 font-bold text-white rounded-md bg-secondary font-raleway top-2 right-1 ">
                    <div className="text-center">{card.date.split(" ")[0]}</div>
                    <div>{card.date.split(" ")[1]}</div>
                  </div>
                </div>
                <img
                  src={card.image}
                  alt="events"
                  className="rounded-t-md w-full max-h-[180px]"
                />
                <div className="p-3">
                  <h2 className="font-bold text-left font-raleway text-subtitle ">
                    {card.name}
                  </h2>
                  <p className="font-medium text-left text-fourth font-raleway text-text">
                    {card.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PopularEvent;

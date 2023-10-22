import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';


import "swiper/css";

const UpComing = () => {
  const cards = [
    {
      title: "Film Festivali 2010",
      description: "Ankara, TR",
      img: "https://filmfestankara.org.tr//uploads/__category/029.jpg",
      date: "10 AUG",
    },
    {
      title: "Tropical Festivali 2025",
      description: "İstanbul, TR",
      img: "https://i.pinimg.com/236x/7d/d3/f1/7dd3f1108e0b5822aaf5defa27e562d5.jpg",
      date: "10 AUG",
    },
    {
      title: "Caz Festivali 2020",
      description: "İstanbul, TR",
      img: "https://cazkolik.com/storage/gorseller/20120608_021301.jpg",
      date: "10 AUG",
    },
    {
      title: "Caz Festivali 2025",
      description: "İstanbul, TR",
      img: "https://cazkolik.com/storage/gorseller/20120608_021341.jpg",
      date: "10 AUG",
    },
    {
      title: "Dans Festivali 2025",
      description: "İstanbul, TR",
      img: "https://marketplace.canva.com/EAExRafOmWE/1/0/1131w/canva-gri-ill%C3%BCstrasyon-dans-festivali-posteri-26SP97CNeOs.jpg",
      date: "10 AUG",
    },
    {
      title: "Caz Festivali 2025",
      description: "İstanbul, TR",
      img: "https://i.pinimg.com/originals/7e/99/9b/7e999ba5942bf7e1816ed609824bad78.jpg",
      date: "10 AUG",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center  gap-5 ">
      <div className="flex justify-between items-center w-full max-w-6xl mt-4">
        <h6 className="text-4xl text-black font-bold">Etkinlikler</h6>
        <button className=" rounded-md px-5 py-2 bg-blue-700 text-white font-medium">Event</button>
      </div>
      <h5 className="text-gray-500 text-xl font-bold text-left w-full max-w-6xl">
        Yaklaşan etkinlikler
      </h5>
      <div className="w-full max-w-6xl ">
        <Swiper
        modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={4}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            "491": {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            "640": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "768": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "1024": {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          className="w-full"
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="text-black w-[250px] h-[250px] rounded-md shadow-lg border border-gray-400  hover:shadow-2xl">
                <div className=" flex justify-center items-center z-10  relative">
                  <div className="absolute top-2 right-1 bg-blue-700 rounded-md p-2 text-white font-medium">
                    <div className="text-center">{card.date.split(" ")[0]}</div>
                    <div>{card.date.split(" ")[1]}</div>
                  </div>
                </div>
                <img
                  src={card.img}
                  alt="events"
                  className="rounded-t-md w-full max-h-[180px]"
                />
                <div className="p-3">
                  <h2 className="text-xl font-bold text-left">{card.title}</h2>
                  <p className="text-left text-gray-600">{card.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default UpComing;

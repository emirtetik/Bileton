import { SwiperSlide } from "swiper/react";
import { Navigation} from "swiper/modules";
import CustomCarousel from "../../_coreComponent/customCarousel";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { cardList } from "../../../constant";
const HotTicket = () => {
  return (
    <div>
        <div className="flex items-center justify-between max-w-7xl mx-auto px-0 sm:px-10 py-4"> 
         <h1 className="font-bold sm:text-2xl text-xl px-3">Hot Ticket</h1>
        </div>
    <CustomCarousel
    modules={[ Navigation]}
    slidesPerView={"auto"}
    navigation={true}
    className="populer-carousel "
  >
    <div className="w-full ">
      {cardList.map((card, index: number) => (
        <SwiperSlide key={index}>
          <img
            src={card.img}
            alt={card.title}
            className="w-10/12 mx-auto md:h-[28rem] sm:h-[26rem] h-[25rem] rounded-2xl shadow-dark"
          />
           <div className="flex justify-between max-w-7xl mx-auto font-raleway mt-2 mb-4 sm:mb-8 px-3">
                <h2 className="font-bold truncate text-xl sm:text-3xl">{card.title}</h2>
                <p className="sm:text-3xl text-xl">{card.venue}</p>
              </div>
          
        </SwiperSlide>
      ))}
    </div>
  </CustomCarousel>
  </div>
  )
}

export default HotTicket
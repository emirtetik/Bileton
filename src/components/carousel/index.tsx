import CustomSlider from "./../_coreComponent/customSlider";
import { cardList } from "../../constant";
import BigCarousel from "../_coreComponent/bigCarousel";

const Carousel = () => {
  return (
    <div className="w-screen ">
      <BigCarousel />

      <CustomSlider events={cardList} title="this Week" />
      <CustomSlider events={cardList} title="Only Bileton" />

      <div className="w-full h-1 my-4 bg-yellow-400 "></div>
      <BigCarousel title="Populer"/>
      <div className="w-full h-1 my-4 bg-yellow-400 "></div>

      <CustomSlider events={cardList} title="Hot Tickets" />

      <CustomSlider events={cardList} title="Selected For You" />
    </div>
  );
};

export default Carousel;

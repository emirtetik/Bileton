import CustomSlider from "./../_coreComponent/customSlider";
import PopularCarousel from "./populer";
import { cardList } from "../../constant";
import BigCarousel from "../_coreComponent/bigCarousel";

const Carousel = () => {
  return (
    <div className="space-y-6">
      <div>
        <BigCarousel />
      </div>
      <div className="ml-[10px] px-[5%]">
        <CustomSlider events={cardList} title="this Week" />
      </div>
      <div className="ml-[10px] px-[5%]">
        <CustomSlider events={cardList} title="Only Bileton" />
      </div>
      <div className="ml-[10px] px-[5%]">
        <CustomSlider events={cardList} title="Hot Tickets" />
      </div>
      <div className="  space-y- ml-[10px] px-[5%]">
        <CustomSlider events={cardList} title="Selected For You" />
      </div>
    </div>
  );
};

export default Carousel;

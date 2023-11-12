import CustomSlider from "./../_coreComponent/customSlider";
import { cardList } from "../../constant";
import BigCarousel from "../_coreComponent/bigCarousel";

const Carousel = () => {
  return (
    <div className="space-y-6">
      <BigCarousel />
      <CustomSlider events={cardList} title="this Week" />
      <CustomSlider events={cardList} title="Only Bileton" />
      <CustomSlider events={cardList} title="Hot Tickets" />
      <CustomSlider events={cardList} title="Selected For You" />
    </div>
  );
};

export default Carousel;

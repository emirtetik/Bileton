import CustomSlider from "./../_coreComponent/customSlider";
import { cardList } from "../../constant";
import BigCarousel from "../_coreComponent/bigCarousel";

const Carousel = () => {
  return (
    <div className="w-screen ">
      <BigCarousel />
      <CustomSlider events={cardList} title="Bu Hafta" />
      <CustomSlider events={cardList} title="Sadece Bileton'da" />
      <div className="w-full border-t-4 border-b-4 border-yellow-500">
      <BigCarousel title="Müzik"/>
      </div>
      <CustomSlider events={cardList} title="Pop" />
      <CustomSlider events={cardList} title="Rap" />
      <CustomSlider events={cardList} title="Rock" />
      <CustomSlider events={cardList} title="Caz" />
      <CustomSlider events={cardList} title="Klasik" />
      <div className="w-full border-t-4 border-b-4 border-yellow-500 ">
        <BigCarousel  title="Sahne"/>
      </div>
      <CustomSlider events={cardList} title="Tiyatro" />
      <CustomSlider events={cardList} title="Gösteri" />
      <CustomSlider events={cardList} title="Stand-Up" />
    </div>
  );
};

export default Carousel;

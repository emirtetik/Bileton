import CustomSlider from "./../_coreComponent/customSlider";
import { cardList } from "../../constant";
import BigCarousel from "../_coreComponent/bigCarousel";

const Carousel = () => {
  return (
    <div className="space-y-6">
      <BigCarousel />
      <CustomSlider events={cardList} title="Bu Hafta" />
      <CustomSlider events={cardList} title="Sadece Bileton'da" />
      <div className="border-t-4 border-b-4 border-yellow-500">
      <BigCarousel  title="Populer"/>
      </div>
      <CustomSlider events={cardList} title="İndrimli Biletler" />
      <CustomSlider events={cardList} title="Sizin İçin Seçtiklerimiz" />
    </div>
  );
};

export default Carousel;

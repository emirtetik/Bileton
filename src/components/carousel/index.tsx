import CustomSlider from "./../_coreComponent/customSlider";
import BigCarousel from "../_coreComponent/bigCarousel";
import { useCarousel } from "../../services/useCarousel";

const Carousel = () => {
  const { categoryTheatre, isLoading, error } = useCarousel();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="w-screen ">
      <BigCarousel />
     <CustomSlider events={categoryTheatre} title="Tiyatro" />
     {/* <CustomSlider events={WeekCarousel} title="Bu Hafta" /> */}

      {/*  <CustomSlider events={cardList} title="Sadece Bileton'da" />
      <div className="w-full border-t-4 border-b-4 border-yellow-500">
      <BigCarousel title="Müzik"/>
      </div>
      <CustomSlider events={} title="Rap" />
      <CustomSlider events={} title="Rock" />
      <CustomSlider events={} title="Caz" />
      <CustomSlider events={} title="Klasik" />
      <div className="w-full border-t-4 border-b-4 border-yellow-500 ">
        <BigCarousel  title="Sahne"/>
      </div>
      <CustomSlider events={} title="Gösteri" />
      <CustomSlider events={} title="Stand-Up" /> */}
    </div>
  );
};

export default Carousel;

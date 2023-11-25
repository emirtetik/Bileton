import CustomSlider from "./../_coreComponent/customSlider";
// import BigCarousel from "../_coreComponent/bigCarousel";
import useSWR from "swr";
import { EventService } from "../../services/EventService";

const fetcher = () => EventService.getAll();

const Carousel = () => {
  const { data, isLoading, error } = useSWR("carousel", fetcher);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="w-screen ">
      {/* <BigCarousel /> */}
      <CustomSlider events={data} title="Tiyatro" />
      <CustomSlider events={data} title="Bulusma" />
      <CustomSlider events={data} title="Müzik" />

      {/* <CustomSlider events={WeekCarousel} title="Bu Hafta" /> */}
      {/*  <CustomSlider events={cardList} title="Sadece Bileton'da" />
      <div className="w-full border-t-4 border-b-4 border-yellow-500">
      <BigCarousel title="Müzik"/>
      </div>
     
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

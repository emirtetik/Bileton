import CustomSlider from "./../_coreComponent/customSlider";
import BigCarousel from "../_coreComponent/bigCarousel";
import useSWR from "swr";
import { EventService } from "../../services/EventService";
import { event } from "../../types";

const fetcher = () => EventService.getAll();

const Carousel = () => {
  const { data: events, error, isLoading } = useSWR("carousel", fetcher);
  console.log("data", events);

  if (isLoading) {
    return <div>Loading</div>;
  }
  if (error) {
    return <div>Error </div>;
  }

  return (
    <div className="w-screen ">
      <BigCarousel events={events.slice(7)} title="naber" />
      <CustomSlider
        events={events.filter((event: event) => event.category === "Tiyatro")}
        title="Tiyatro"
      />
      <CustomSlider
        events={events.filter((event: event) => event.category === "Stand-Up")}
        title="Stand-Up"
      />
      <div className="w-full border-t-4 border-b-4 border-yellow-500 ">
        <BigCarousel events={events.slice(7)} title="naber" />
      </div>
      <CustomSlider
        events={events.filter((event: event) => event.category === "Müzik")}
        title="Müzik"
      />
      <div className="w-full border-t-4 border-b-4 border-yellow-500 ">
        <BigCarousel events={events.slice(7)} title="naber" />
      </div>
      <CustomSlider
        events={events.filter((event: event) => event.category === "Festival")}
        title="Festival"
      />
    </div>
  );
};

export default Carousel;

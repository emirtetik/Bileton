import CustomSlider from "./../_coreComponent/customSlider";
import BigCarousel from "../_coreComponent/bigCarousel";
import useSWR from "swr";
import { EventService } from "../../services/EventService";
import { event } from "../../types";

const fetcher = () => EventService.getAll();

const Carousel = () => {
  const { data: events, isLoading: isEventsLoading, error: eventsError} = useSWR("carousel", fetcher);
  console.log("data", events)
  if (isEventsLoading) {
    return <div>Loading...</div>;
  }

  if (eventsError) {
    return <div>Error </div>;
  }

  return (
    <div className="w-screen ">
      <BigCarousel />
      <CustomSlider events={events.filter((event:event) => event.category === 'Tiyatro')} title="Tiyatro" />
      <CustomSlider events={events.filter((event:event) => event.category === 'Stand-Up')} title="Stand-Up" />
      <div className="w-full border-t-4 border-b-4 border-yellow-500 ">
      <BigCarousel title="Volkswagen Arena " filter={(event) => event.venue === 'Volkswagen Arena'} />
      </div>
      <CustomSlider events={events.filter((event:event) => event.category === 'Müzik')} title="Müzik" />
      <div className="w-full border-t-4 border-b-4 border-yellow-500 ">
      <BigCarousel title="Dorock XL" filter={(event) => event.venue === 'Dorock XL'} />
      </div>
      <CustomSlider events={events.filter((event:event) => event.category === 'Festival')} title="Festival" />
      
    </div>
  );
};

export default Carousel;

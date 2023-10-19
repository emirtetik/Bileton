import Carousel from "../../components/carousel";
import EventsSection from "../../components/eventList/eventsSections";

const Home = () => {
  return (
    <div className="flex flex-col px-8 gap-8">
      <Carousel />
      <EventsSection />
    </div>
  );
};

export default Home;

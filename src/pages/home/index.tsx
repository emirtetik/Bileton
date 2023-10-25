import EventsSection from "../../components/_events/eventList/eventsSections";
import PopulerEvent from "../../components/_events/populerEvent";
import TodayEvent from "../../components/_events/todayEvent";
import EventDetail from "../../components/eventDetail";
import ViewTab from "../../components/tab/viewTab";

const Home = () => {
  return (
    <div>
      {/* <PopulerEvent/>
     <ViewTab/>
     <TodayEvent/> */}
      <EventDetail />
    </div>
  );
};

export default Home;

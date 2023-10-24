import PopulerEvent from "../../components/_events/populerEvent";
import TodayEvent from "../../components/_events/todayEvent";
import ViewTab from "../../components/tab/viewTab";

const Home = () => {
  return (
    <div>
      <PopulerEvent />
      <ViewTab />
      <TodayEvent />
    </div>
  );
};

export default Home;

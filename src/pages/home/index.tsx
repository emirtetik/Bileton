import TodayEvent from "../../components/_events/todayEvent";
import PopulerEvent from "../../components/_events/populerEvent";
import ViewTab from "../../components/tab/viewTab";

const Home = () => {
  return (
    <div className="mx-20">
      <PopulerEvent />
      <ViewTab />
      <TodayEvent />
    </div>
  );
};

export default Home;

import TodayEvent from "../../components/_events/todayEvent";
import PopulerEvent from "../../components/_events/populerEvent";
import ViewTab from "../../components/tab/viewTab";
import Categories from "../../components/category/categories";

const Home = () => {
  return (
    <div className="ml-16">
      {/* <PopulerEvent />
      <ViewTab />
      <TodayEvent /> */}
      <Categories />
    </div>
  );
};

export default Home;

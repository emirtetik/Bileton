import EventList from "../../components/eventList"
import SideBar from "../../components/sideBar"

const Home = () => {
  return (
    <div className="flex flex-row h-screen overflow-hidden ">
      <SideBar />
      <EventList />
    </div>
  )
}

export default Home
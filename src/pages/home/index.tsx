import EventList from "../../components/eventList"
import SideBar from "../../components/sideBar"

const Home = () => {
  return (
    <div className="flex flex-row h-screen  ">
      <SideBar />
      <div className="flex flex-col w-full h-52 ">
      <EventList />
      
      </div>
    </div>
  )
}

export default Home
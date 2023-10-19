import EventsSection from "../../components/eventList/eventsSections"
import SideBar from "../../components/sideBar"

const Home = () => {
  return (
    <div className="flex flex-row h-screen  ">
      <SideBar />
      <div className="flex flex-col w-full h-52 ">
      <div>Carousel</div>
      <EventsSection/>
      
      </div>
    </div>
  )
}

export default Home
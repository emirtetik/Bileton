import Sticky from "../sticky"
import Tab from ".."
import FilterBar from "../../_coreComponent/filterBar"
import EventsSection from "../../_events/eventList/eventsSections"


const TabHome = () => {
  return (
    <div>
      <Tab activeTab="home">
        <Sticky>
          <Tab.Items>
            <Tab.Item id="home">Home</Tab.Item>
            <Tab.Item id="past">Past</Tab.Item>
          </Tab.Items>
        </Sticky>
        <Tab.Content id="home">
          {/* Anasayfada bir component  gösterilicekse burda olmalı  */}
          <FilterBar/>
           <EventsSection/> 
         </Tab.Content>
         <Tab.Content id='past'>

          {/* Past sekmesinde bir component  gösterilicekse burda olmalı  */}
          merhaba
        </Tab.Content>
      </Tab>
    </div>
  );
};

export default TabHome;

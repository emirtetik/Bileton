import { useState } from "react";
import Sticky from "../sticky";
import Tab from "..";
import EventsSection from "../../_events/eventList/futureEvent/eventsSections";
import PastEvent from "../../_events/eventList/pastEvent";

const TabHome = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div>
      <Tab activeTab={activeTab} setActive={setActiveTab}>
        <Sticky>
          {/* <div>
            <Tab.Items>
              <Tab.Item id="home">Home</Tab.Item>
              <Tab.Item id="past">Past</Tab.Item>
            </Tab.Items>
          </div> */}
        </Sticky>
        <Tab.Content id="home">
          {/* Anasayfada bir component  gösterilicekse burda olmalı  */}
          <EventsSection />
        </Tab.Content>
        <Tab.Content id="past">
          {/* Past sekmesinde bir component  gösterilicekse burda olmalı  */}
          <PastEvent />
        </Tab.Content>
      </Tab>
    </div>
  );
};

export default TabHome;

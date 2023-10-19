import Sticky from "../../components/sticky"
import Tab from "../../components/tab"
import TabHome from "./tabHome"

const Home = () => {
  return (
    <div>
      <Tab activeTab='home'>
      <Sticky title="Anasayfa">
         <Tab.Items>
         <Tab.Item  id='home'>
            Home
          </Tab.Item>
          <Tab.Item id='past'>
            Past
          </Tab.Item>
         </Tab.Items>
         </Sticky>
         <Tab.Content id='home'>
         <TabHome/>
         </Tab.Content>
         <Tab.Content id='past'>
          past content
         </Tab.Content>
    </Tab>
    </div>
  )
}

export default Home
import { Link } from "react-router-dom";
import {ImClock2} from "react-icons/im"
import {BsFillCalendarDateFill} from "react-icons/bs"
// import { EventService } from "../../../services/EventService";
// import useSWR from "swr";
// import moment from 'moment'; 

// interface TodayEventProps {
//   time: string;
//   title: string;
//   date: string;
//   name:string
// }


// const fetcher = () => EventService.getAll();


const TodayEvent = () => {
    // const {data,error,isLoading} = useSWR("todayEvent",fetcher)
     
    
    // if (isLoading) {
    //   return <div>..Loading</div>
    // }
    // if (error) {
    //   return  <div>...failed</div>
    // }
      
    // const today = moment().format('YYYY-MM-DD'); 
    // const todayData = data.filter((event:TodayEventProps) => moment(event.date).format('YYYY-MM-DD') === today); 
  return (
    <section className="max-w-6xl mx-auto mb-6  h-52">
      <div className="max-w-4xl pt-10 mx-auto ">
        <div className="flex justify-between mb-4 ">
          <h6 className="text-2xl font-bold text-primary uppercase text-subtitle font-raleway before:border-r-4 before:border-primary before:mr-3">Bugün Programı</h6>
          <h6 className="flex font-bold text-subtitle font-raleway text-primary"><BsFillCalendarDateFill className="text-fourth w-6 h-6 mr-1 mt-1.5"/> 24 agustos</h6>
        </div>
        <div className="flex items-center gap-5 rounded-2xl ">
          <ImClock2 className="text-fourth w-7 h-7"/>
          <div className="bg-primary h-[1px] flex-1 flex justify-between rounded-full">
            {/* {todayData.map((item:TodayEventProps, i:number) => (
              <div key={i} className="flex flex-col items-center">
                <button className="w-8 h-8 rounded-full flex items-center justify-center -top-3.5 relative transition-colors ">
                  <div className="w-3 h-3 mt-2 bg-blue-500 rounded-full"></div>
                </button>
                <div className="mb-3 font-bold text-center text-gray-500 font-raleway ">{item.name}</div>
                <div className="w-[100px] text-center font-raleway font-bold">{item.title}</div>
              </div>
            ))} */}
          </div>
          <div >
            <Link to="/" className="font-bold text-fourth hover:text-primary font-raleway">Tüm etkinlikler</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TodayEvent;

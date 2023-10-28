import {  useState } from "react";
import FilterBar from "../../../_coreComponent/filterBar";
import EventList from "./eventList";
import useSWR from "swr";
import { EventService } from "../../../../services/EventService";
import { searchProps } from "../../../../types";




const fetcher = () => EventService.getAll();

const EventsSection = () => {
  const { data: events, isLoading, error } = useSWR("events", fetcher);

  const [search, setSearch] = useState<searchProps>({
    startDate: "",
    endDate: "",
    location: "",
    category: "",
  });
 
  const [filteredEvents, setFilteredEvents] = useState([]);
   
 
  const handleSearch = () => {
    if (search.startDate && search.endDate && search.location && search.category) {
      setFilteredEvents(events.filter((event:searchProps) =>
        event.startDate >= search.startDate &&
        event.endDate <= search.endDate &&
        event.location === search.location &&
        event.category === search.category
      ));
      console.log('arama yapılıyor')
    } else {
      console.log('Lütfen tüm alanları doldurunuz');
    }
  };
  
  let displayEvents;

  if (filteredEvents.length > 0) {
    displayEvents = filteredEvents;
  } else {
    displayEvents = events;
  }
   
  return (
    <div>
      <FilterBar search={search} setSearch={setSearch} events={events} onSearch={handleSearch} />
      <EventList
        search={search}
        events={displayEvents}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
};

export default EventsSection;

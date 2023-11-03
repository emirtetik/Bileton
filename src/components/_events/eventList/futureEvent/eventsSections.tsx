import { useState } from "react";
import EventList from "./eventList";
import FilterBar from "../../../_coreComponent/filterBar";
import useSWR from "swr";
import { EventService } from "../../../../services/EventService";
import { event, searchProps } from "../../../../types";

const fetcher = () => EventService.getAll();

const EventsSection = () => {
  const { data: events, isLoading, error } = useSWR("events", fetcher);
  const [filteredEvents, setFilteredEvents] = useState(events);

  const [search, setSearch] = useState<searchProps>({
    startDate: "",
    endDate: "",
    location: "",
    category: "",
  });

  const handleSearch = () => {
    setFilteredEvents(
      events.filter((event: event) => {
        return (
          (search.startDate
            ? Date.parse(event.date) >= Date.parse(search.startDate)
            : true) &&
          (search.endDate
            ? Date.parse(event.date) <= Date.parse(search.endDate)
            : true) &&
          (search.location ? event.location === search.location : true) &&
          (search.category ? event.category === search.category : true)
        );
      })
    );
    setSearch({
      startDate: "",
      endDate: "",
      location: "",
      category: "",
    });
  };

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <>
      <FilterBar
        search={search}
        setSearch={setSearch}
        events={events}
        onSearch={handleSearch}
        isLoading={isLoading}
        error={error}
      />
      <EventList
        search={search}
        events={filteredEvents ? filteredEvents : events}
        isLoading={isLoading}
        error={error}
      />
    </>
  );
};

export default EventsSection;

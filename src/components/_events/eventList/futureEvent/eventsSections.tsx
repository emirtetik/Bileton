import { useState } from "react";
import { lazy, Suspense } from "react";
const EventList = lazy(() => import("./eventList"));
const FilterBar = lazy(() => import("../../../_coreComponent/filterBar"));
import useSWR from "swr";
import { EventService } from "../../../../services/EventService";
import { event, searchProps } from "../../../../types";

const fetcher = () => EventService.getAll();

const EventsSection = () => {
  const { data: events, isLoading, error } = useSWR("events", fetcher);

  const [search, setSearch] = useState<searchProps>({
    startDate: "",
    endDate: "",
    location: "",
    category: "",
  });

  const [filteredEvents, setFilteredEvents] = useState(events);

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
    console.log(Date.parse(events[0].date) >= Date.parse(search.startDate));
    setSearch({
      startDate: "",
      endDate: "",
      location: "",
      category: "",
    });

    console.log(search);
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
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
        events={filteredEvents}
        isLoading={isLoading}
        error={error}
      />
    </Suspense>
  );
};

export default EventsSection;

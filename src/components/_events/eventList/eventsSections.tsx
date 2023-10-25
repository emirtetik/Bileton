import { useState } from "react";
import FilterBar from "../../_coreComponent/filterBar";
import EventList from "./eventList";
import useSWR from "swr";
import { EventService } from "../../../services/EventService";
import { searchProps } from "../../../types";

const fetcher = () => EventService.getAll();

const EventsSection = () => {
  const { data: events, isLoading, error } = useSWR("events", fetcher);

  const [search, setSearch] = useState<searchProps>({
    startDate: "",
    endDate: "",
    location: "",
    category: "",
  });

  return (
    <div>
      <FilterBar search={search} setSearch={setSearch} events={events} />
      <EventList
        search={search}
        events={events}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
};

export default EventsSection;

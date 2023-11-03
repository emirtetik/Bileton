import EventCard from "../_coreComponent/eventCard";
import useSWR from "swr";
import { EventService } from "../../services/EventService";
import { event } from "../../types";

const fetcher = () => EventService.getAll();

const OtherEvents = () => {
  const { data, isLoading, error } = useSWR("otherEvents", fetcher);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>is loading</div>;
  const cards = data.slice(0, 8);

  return (
    <div className="flex flex-col gap-6 px-4 pt-8 mx-4 mt-8 md:p-4 lg:p-12 md:m-32 md:mt-24 font-raleway">
      <h1 className="mt-10 font-bold text-title text-primary">
        Other Events You May Like
      </h1>
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 ">
        {cards.map((card: event, i: number) => (
          <EventCard card={card} key={i} />
        ))}
      </div>
    </div>
  );
};

export default OtherEvents;

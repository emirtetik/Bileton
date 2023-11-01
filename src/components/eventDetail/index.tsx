import DetailSection from "./detailSection";
import SummaryCard from "./summaryCard";
import OtherEvents from "./otherEvents";
import { useParams } from "react-router-dom";
import { event } from "../../types";
import useSWR from "swr";
import { EventService } from "../../services/EventService";

const EventDetail = () => {
  const fetcher = () => EventService.getById(id);

  const { data, isLoading } = useSWR("eventByName", fetcher);
  const { name = "" } = useParams();
  const id = name.split("-")[1];
  if (isLoading) return <div>Loading...</div>;
  const cards = data.find((event: event) => event._id === id);
  console.log(cards);
  cards.photos = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  return (
    <div className="h-screen ">
      <SummaryCard event={cards} />
      <DetailSection event={cards} />
      <div className="bg-white ">
        <OtherEvents />
      </div>
    </div>
  );
};

export default EventDetail;

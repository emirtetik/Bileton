import DetailSection from "./detailSection";
import SummaryCard from "./summaryCard";
import OtherEvents from "./otherEvents";
import { useParams } from "react-router-dom";
import { event } from "../../types";
import useSWR from "swr";
import { EventService } from "../../services/EventService";
const fetcher = () => EventService.getAll();
function slugify(str: string) {
  return String(str)
    .normalize("NFKD") // split accented characters into their base characters and diacritical marks
    .replace(/[\u0300-\u036f]/g, "") // remove all the accents, which happen to be all in the \u03xx UNICODE block.
    .trim() // trim leading or trailing whitespace
    .toLowerCase() // convert to lowercase
    .replace(/[^a-z0-9 -]/g, "") // remove non-alphanumeric characters
    .replace(/\s+/g, "-") // replace spaces with hyphens
    .replace(/-+/g, "-"); // remove consecutive hyphens
}
const EventDetail = () => {
  const { data, isLoading } = useSWR("eventByName", fetcher);
  const { name } = useParams();

  if (isLoading) return <div>Loading...</div>;
  const cards = data.filter((event: event) =>
    slugify(event.name).includes(slugify(name))
  );

  return (
    <div className="h-screen ">
      <SummaryCard event={cards} />
      <DetailSection event={cards} />
      <div className="bg-gray-100 ">
        <OtherEvents />
      </div>
    </div>
  );
};

export default EventDetail;

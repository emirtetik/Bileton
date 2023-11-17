import { useParams } from "react-router-dom";

import useSWR from "swr";
import { event } from "../../types";
import { EventService } from "../../services/EventService";
import Card from "../_coreComponent/card";

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
const EventsBycategory = () => {
  const { data, isLoading, error } = useSWR("categories2", fetcher);
  const { name = "" } = useParams();

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  const cards = data.filter((event: event) =>
    slugify(event.category).includes(slugify(name) || "")
  );
  // const cards = cardList.filter((card) =>
  //   slugify(card.title).includes(slugify(name) || "")
  // );
  return (
    <div className="px-0 sm:px-20 pt-28">
      <h1 className="mb-4 text-2xl font-extrabold text-white font-raleway ">
        {name[0].toUpperCase() + name.slice(1)}
      </h1>
      <div className="flex items-center justify-end px-10 mb-6 border-b border-white sm:py-2"></div>
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 ">
        {cards.map((card: event) => (
          <Card
            key={card._id}
            title={card.name}
            description={card.description}
            date={card.eventDate}
            route={`/event/${card.name}-${card._id}`}
            size="small"
          />
          // <Link to={`/event/${card.name}-${card._id}`} key={card._id}>
          // </Link>
        ))}
      </div>
    </div>
  );
};

export default EventsBycategory;

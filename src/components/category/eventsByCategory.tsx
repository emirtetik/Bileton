import { useParams } from "react-router-dom";
import useSWR from "swr";
import { event } from "../../types";
import { EventService } from "../../services/EventService";
import Card from "../_coreComponent/card";

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

const fetcher = () => EventService.getAll();

const EventsBycategory = () => {
  const { data, isLoading, error } = useSWR("categories2", fetcher);
  const { name = "" } = useParams();
  const lowerCaseName = name.toLowerCase();

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  const cards = data.filter(
    (event: event) => event.category.toLowerCase() === lowerCaseName
  );

  return (
    <div className="max-w-6xl px-0 mx-auto sm:px-20 pt-28">
      <h1 className="mb-4 text-2xl font-extrabold text-white font-raleway ">
        {name[0].toUpperCase() + name.slice(1)}
      </h1>
      <div className="flex items-center justify-end px-10 mb-6 border-b border-white sm:py-2"></div>
      <div className="flex flex-col justify-center w-full gap-4 md:gap-8 ">
        {cards.map((card: event) => (
          <Card
            key={card._id}
            title={card.name}
            image={card.image}
            description={card.description}
            date={card.eventDate}
            route={`../event/${slugify(`${card.name} ${card._id}`)}`}
            size="small"
          />
        ))}
      </div>
    </div>
  );
};

export default EventsBycategory;

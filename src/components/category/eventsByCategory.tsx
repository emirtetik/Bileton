import {  useParams } from "react-router-dom";

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
    <div className="flex flex-col gap-12 px-4 pt-8 mx-4 mt-28 md:p-4 lg:p-12 md:m-32 md:mt-12 font-raleway">
      <h1 className="text-6xl font-bold text-center text-primary ">{name}</h1>
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

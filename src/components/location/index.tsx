import { Link, useParams } from "react-router-dom";

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
const EventsByLocation = () => {
  const { data, isLoading, error } = useSWR("location", fetcher);
  const { name = "" } = useParams();
 
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  const cards = data.filter((event: event) => {
    let locationSlug: string;
    if (typeof event.location === 'string') {
      locationSlug = slugify(event.location);
    } else {
      locationSlug = slugify(event.location.join(', '));
    }
    return locationSlug.includes(slugify(name) || "");
  });
  // const cards = cardList.filter((card) =>
  //   slugify(card.title).includes(slugify(name) || "")
  // );
  return (
    <div className="flex flex-col gap-12 px-4 pt-8 mx-4 mt-8 md:p-4 lg:p-12 md:m-32 md:mt-12 font-raleway">
      <h1 className="text-center font-bold text-title">{name}</h1>
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 ">
        {cards.map((card: event) => (
          <Link to={`/event/${card.name}-${card._id}`} key={card._id}>
            <div className="text-black w-full sm:w-[250px] h-[250px] rounded-md shadow-lg hover:shadow-2xl bg-white">
            <Card
             image={card.image}
             title={card.name}
             description={card.description}
             date={card.eventDate}
             size="small"
            />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventsByLocation;

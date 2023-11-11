import { Link, useParams } from "react-router-dom";

import useSWR from "swr";
import { event } from "../../types";
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
    <div className="flex flex-col gap-12 px-4 pt-8 mx-4 mt-8 md:p-4 lg:p-12 md:m-32 md:mt-12 font-raleway">
      <h1 className="text-center font-bold text-6xl text-primary ">{name}</h1>
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 ">
        {cards.map((card: event) => (
          <Link to={`/event/${card.name}-${card._id}`} key={card._id}>
            <div className="text-black w-full sm:w-[250px] h-[250px] rounded-md shadow-lg hover:shadow-2xl bg-white">
              <div className="relative z-10 flex items-center justify-center "></div>
              <img
                src={
                  "https://i.pinimg.com/originals/7e/99/9b/7e999ba5942bf7e1816ed609824bad78.jpg"
                }
                alt="events"
                className="rounded-t-md w-full max-h-[150px] object-cover"
              />
              <div className="flex items-center gap-2 p-4">
                <div className="p-4 font-medium rounded-md ">
                  {/* <div className="text-purple-700 darkText ">
                  {card.date.split(" ")[1]}
                </div>
                <div className="text-center darkText ">
                  {card.date.split(" ")[0]}
                </div> */}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-left ">{card.name}</h2>
                  <p className="text-left text-gray-600">{card.description}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventsBycategory;

import { Link } from "react-router-dom";
import { event } from "../../../types";
import Moment from "react-moment";

const EventCard = (props: { card: event; key: number }) => {
  console.log("props", props);
  return (
    <Link key={props.key} to={`/event/${props.card.name}-${props.card._id}`}>
      <div className="relative flex flex-col border border-gray-400 text-black w-full sm:w-[250px] h-[250px] rounded-md shadow-lg hover:shadow-2xl bg-fifth">
        <div className="flex  flex-1">
          <img
            src={props.card.image}
            alt="events"
            className="rounded-t-md w-full  object-cover"
          />
        </div>
        <div className="absolute uppercase flex flex-col bg-blue-700 leading-none p-2 rounded-sm z-10 top-3 right-3 text-center text-white">
          <Moment format="DD">{props.card.date}</Moment>
          <Moment format="MMM" titleFormat="uppercase">
            {props.card.date}
          </Moment>
        </div>
        <div className="flex flex-col items-start justify-center p-6">
          <h2 className="text-xl font-bold text-left">{props.card.name}</h2>
          <p className="text-left text-fourth">{props.card.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;

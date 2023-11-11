import { Link } from "react-router-dom";
import { event } from "../../../types";
import Moment from "react-moment";

const EventCard = (props: { card: event; key: number }) => {
  return (
    <Link key={props.key} to={`/event/${props.card.name}-${props.card._id}`}>
      <div className="relative flex flex-col border border-gray-400 text-black w-full sm:w-[230px] h-[230px] rounded-md shadow-lg hover:shadow-2xl bg-fifth">
        <div className="flex flex-1">
          <img
            src={props.card.image}
            alt="events"
            className="object-cover w-full rounded-t-md"
          />
        </div>
        <div className="absolute z-10 flex flex-col p-2 leading-none text-center text-white uppercase bg-blue-700 rounded-sm top-3 right-3">
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

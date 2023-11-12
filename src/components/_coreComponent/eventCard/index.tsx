import { Link } from "react-router-dom";
import { event } from "../../../types";

const EventCard = (props: { card: event; key: number; size: string }) => {
  return (
    <Link key={props.key} to={`/event/${props.card.name}-${props.card._id}`}>
      <img
        src={props.card.img}
        alt={props.card.title}
        className={
          props.size == "big"
            ? "h-[350px] w-[350px] rounded-lg"
            : "h-[250px] w-[250px] rounded-lg"
        }
      />

      <div className="z-20 pt-3 text-left">
        <h2 className="font-medium  text-[18px]">{props.card.title}</h2>
        <p className="text-sm text-gray-500">{props.card.data}</p>
        <p className="text-sm text-gray-500">{props.card.time}</p>
        <p className="text-sm text-gray-500">{props.card.venue}</p>
      </div>
      <div className="absolute inset-y-0 right-0 w-24 "></div>
    </Link>
  );
};

export default EventCard;

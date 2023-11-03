import { Link } from "react-router-dom";
import { event } from "../../../types";
import Moment from "react-moment";

const EventCard = (props: { card: event; key: number }) => {
  console.log("props", props);
  return (
    <Link key={props.key} to={`/event/${props.card.name}-${props.card._id}`}>
      <div className="text-black w-full sm:w-[250px] h-[250px] rounded-md shadow-lg hover:shadow-2xl bg-fifth">
        <div className="relative z-10 flex items-center justify-center "></div>
        <img
          src={props.card.image}
          alt="events"
          className="rounded-t-md w-full max-h-[150px] object-cover"
        />
        <div className="flex items-center gap-2 p-4">
          <div className="p-2 font-medium rounded-md  bg-white">
            <div className="text-secondary font-bold  ">
              <Moment format="MMM">{props.card.date}</Moment>
            </div>
            <div className="text-center text-secondary font-bold ">
              <Moment format="DD">{props.card.date}</Moment>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold text-left">{props.card.name}</h2>
            <p className="text-left text-fourth">{props.card.description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;

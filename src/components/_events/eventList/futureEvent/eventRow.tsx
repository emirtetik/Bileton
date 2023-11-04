// import Moment from 'react-moment';

import Moment from "react-moment";

import { event } from "../../../../types";

const EventRow = (props: event) => {
  return (
    <tr>
      <td className="px-5   text-sm  bg-white flex  ">
        <div className="flex items-center justify-center ">
          <p className="text-fourth   whitespace-no-wrap">
            <Moment format="MMM  Do  YY">{props.date}</Moment>
          </p>
        </div>
      </td>
      <td className="px-5 bg-white text-sm flex ">
        <div className="flex items-center justify-center">
          <div className="flex-shrink-0 w-10 h-10">
            <img
              className="w-full h-full rounded-md"
              src={props.image}
              alt=""
            />
          </div>

          <p className="text-fourth pl-3 font-bold whitespace-no-wrap">
            {props.name}
          </p>
        </div>
      </td>
      <td className="flex items-center  px-5  bg-white text-sm">
        <p className="text-fourth whitespace-no-wrap">{props.location}</p>
      </td>
      <td className="px-5 py-4  bg-white text-sm">
        <p className="text-fourth  whitespace-no-wrap">{props.category}</p>
      </td>
    </tr>
  );
};

export default EventRow;

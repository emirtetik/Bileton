// import Moment from 'react-moment';

import Moment from "react-moment";

import { event } from "../../../../types";

const EventRow = (props: event) => {
  return (
    <tr className="w-full flex gap-1">
      <td className="px-5  border border-fifth  text-sm  bg-white flex sm:min-w-[140px] md:min-w-[240px] lg:min-w-[280px]">
        <div className="flex items-center justify-center ">
          <div className="flex-shrink-0 w-10 h-10">
            <img
              className="w-full h-full rounded-md"
              src={props.image}
              alt=""
            />
          </div>
          <div className="ml-3 ">
            <p className="text-fourth font-bold   whitespace-no-wrap">
              {props.name}
            </p>
          </div>
        </div>
      </td>
      <td className="px-5 border border-fifth bg-white text-sm flex sm:min-w-[140px] md:min-w-[240px] lg:min-w-[280px]">
        <div className="flex items-center justify-center">
          <p className="text-fourth whitespace-no-wrap">
            <Moment format="MMM  Do  YY">{props.date}</Moment>
          </p>
        </div>
      </td>
      <td className="flex items-center justify-center px-5  border border-fifth bg-white text-sm sm:min-w-[140px] md:min-w-[240px] lg:min-w-[280px]">
        <p className="text-fourth text-center whitespace-no-wrap">
          {props.location}
        </p>
      </td>
      <td className="px-5 py-4 border border-fifth bg-third text-sm sm:min-w-[140px] md:min-w-[px] lg:min-w-[280px]  hover:bg-fourth hover:text-primary hover:font-bold">
        <p className="text-fourth text-center whitespace-no-wrap">
          {props.category}
        </p>
      </td>
    </tr>
  );
};

export default EventRow;

import EventRow from "./eventRow";
import { useState } from "react";
import { event, searchProps } from "../../../types";

const EventList = (props: {
  search: searchProps;
  events: event[];
  isLoading: boolean;
  error: unknown;
}) => {
  const [page, setPage] = useState(1);

  if (props.error) return <div>failed to load</div>;
  if (props.isLoading) return <div>loading...</div>;
  return (
    <div className="w-full max-w-6xl mx-auto bg-white rounded-md ">
      <div>
        <div className="py-4 overflow-x-auto ">
          <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
            <table className="min-w-full leading-normal border">
              <thead>
                <tr>
                  <th className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase border-b-2 border-gray-300">
                    Date
                  </th>
                  <th className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase border-b-2 border-gray-300">
                    Event
                  </th>
                  <th className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase border-b-2 border-gray-300">
                    Location
                  </th>
                  <th className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase border-b-2 border-gray-300">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {props.events.slice(page - 1, page + 5).map((event: event) => (
                  <EventRow {...event} />
                ))}
              </tbody>
            </table>
            <div className="flex flex-col items-center px-5 py-5 bg-white border-t xs:flex-row xs:justify-between ">
              <span className="text-xs text-gray-900 xs:text-sm">
                Showing {page} to{" "}
                {page + 5 > props.events.length
                  ? props.events.length
                  : page + 5}{" "}
                of {props.events.length}
              </span>
              <div className="inline-flex mt-2 xs:mt-0">
                <button
                  onClick={() => {
                    if (page - 5 > 0) {
                      setPage(page - 5);
                    }
                  }}
                  className="px-4 py-2 text-sm font-semibold transition duration-150 bg-blue-600 rounded-l text-indigo-50 hover:bg-indigo-500"
                >
                  Prev
                </button>
                &nbsp; &nbsp;
                <button
                  onClick={() => {
                    if (page + 5 < props.events.length) {
                      setPage(page + 5);
                    }
                  }}
                  className="px-4 py-2 text-sm font-semibold transition duration-150 bg-blue-600 rounded-r text-indigo-50 hover:bg-indigo-500"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventList;

// import Moment from 'react-moment';

interface event {
  image: string;
  name: string;
  description: string;
  date: string;
  location: string;
  status: string;
}

const EventRow = (props: event) => {
  return (
    <tr>
      <td className="px-5  border border-fifth bg-white text-sm">
        <div className="flex items-center">
          <div className="flex-shrink-0 w-10 h-10">
            <img
              className="w-full h-full rounded-md"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
              alt=""
            />
          </div>
          <div className="ml-3">
            <p className="text-fourth font-bold   whitespace-no-wrap">
              {props.name}
            </p>
          </div>
        </div>
      </td>
      <td className="px-5 border border-fifth bg-white text-sm">
        <p className="text-fourth whitespace-no-wrap">Admin</p>
      </td>
      <td className="px-5  border border-fifth bg-white text-sm">
        {/* <p className="text-fourth whitespace-no-wrap"><Moment format="DD/MM/YYYY">{props.date}</Moment></p> */}
      </td>
      <td className="px-5 py-4 border border-fifth bg-third text-sm">
        <span className="relative inline-block px-3 py-1  text-white leading-tight">
          <span
            aria-hidden
            className="absolute inset-0 bg-primary opacity-50 rounded-full"
          ></span>
          <span className="relative">Active</span>
        </span>
      </td>
    </tr>
  );
};

export default EventRow;

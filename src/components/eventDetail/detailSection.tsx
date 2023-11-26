import MuiButton from "../_coreComponent/mui/button";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Map from "./map";
import { event } from "../../types";
import { Link } from "react-router-dom";
const DetailSection = ({ event }: { event: event }) => {
  let eventkonum: [number, number];

  if (typeof event.location === "string") {
    eventkonum = event.location.split(",").map(Number) as [number, number];
  } else {
    eventkonum = event.location;
  }


  return (
    <div className="flex flex-col gap-6 px-4 pt-8 mx-4 mt-8 md:flex-row md:px-12 md:mx-24 md:mt-24 font-raleway">
      <div className="flex flex-col w-full gap-20 md:w-4/6">
        <div className="flex flex-col w-3/4 gap-6">
          <h2 className="font-bold darkText text-subtitle ">Resimler</h2>
           
    <img
      className="  rounded-md  h-[150px]"
      src={event.image}
      alt={event.name}
    />
        </div>
        <div className="flex flex-col w-3/4 gap-6">
          <h2 className="font-bold darkText text-subtitle ">Açıklama</h2>
          <h3 className=" text-text">{event.description}</h3>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-subtitle ">Saat</h2>
          <div>
            <h3>
              Monday: <span className="font-bold ">{event.startTime} </span>
            </h3>
            <h3>
              Tuesday: <span className="font-bold ">{event.endTime}</span>
            </h3>
          </div>
        </div>
        <Link to={`/ticket/${event._id}`} className="flex items-center justify-center bg-gray-400 rounded-md w-[100px] p-2 text-black hover:text-white hover:text-bold">
            Satın Al
        </Link>
         
      </div>
      <div className="flex flex-col w-full gap-8 mt-8 md:w-2/6 md:mt-0">
        <div className="flex flex-col gap-6">
          <h2>Location</h2>
          <div><Map konum={eventkonum} /></div>
          {/* <div>
            <h2>Dream World Wide</h2>
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              pariatur impedit reprehenderit dolore suscipit adipisci est ea,
              doloremque animi commodi
            </h3>
          </div> */}
        </div>
        <div className="flex flex-col gap-6">
          <h2>Tags</h2>
          <div className="flex gap-2">
            <MuiButton variant="contained" size="small" children="Jazz"  />
            <MuiButton variant="contained" size="small" children="Rock" />
            <MuiButton variant="contained" size="small" children="Pop" />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h2>Arkadaşlarınla Paylaş</h2>
          <div className="flex gap-2">
            <FaFacebookF className="w-8 h-8 p-1.5 bg-blue-500 rounded-full" />
            <FaTwitter className="w-8 h-8 p-1.5 bg-blue-300 rounded-full" />
            <FaInstagram className="w-8 h-8 p-1.5 bg-red-600 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailSection;

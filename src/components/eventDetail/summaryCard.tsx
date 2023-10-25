import MuiButton from "../_coreComponent/mui/button";
import { CiLocationOn } from "react-icons/ci";

const SummaryCard = () => {
  return (
    <div className="bg-gray-500 flex h-4/5 mt-8 mx-12 justify-around items-center">
      <div className="flex-1  ">
        <div className="mx-16 ">
          <h1 className="pb-6 ">Dream World Wide in Jakarta</h1>
          <h3 className="pb-8">By Samil Basayev</h3>
          <p className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Accusantium itaque neque, maiores animi nam eaque optio.
          </p>
          <div className="pt-4 flex  gap-2">
            <CiLocationOn />
            View Map
          </div>
        </div>
      </div>
      <div className="flex flex-col rounded-lg h-3/5 flex-1 ">
        <div className="flex flex-col mx-28 bg-white gap-4 h-full p-8 rounded-xl">
          <div className="flex flex-col gap-2">
            <h2 className="darkText">Date & Time</h2>
            <p className="lightText">Saturday August 21, 2021</p>
            <p className=" text-blue-400"> + Add to Calendar</p>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <MuiButton variant="contained" size="large" fullWidth>
              Book Now
            </MuiButton>
            <MuiButton variant="contained" size="large" fullWidth>
              See Programm
            </MuiButton>
            <MuiButton variant="contained" size="large" fullWidth>
              Participants
            </MuiButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;

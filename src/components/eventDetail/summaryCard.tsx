import MuiButton from "../_coreComponent/mui/button";
import { CiLocationOn } from "react-icons/ci";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

const SummaryCard = () => {
  return (
    <div className="box-border flex flex-col mx-4 mt-8 text-white bg-center bg-cover md:mx-12 font-raleway h-4/5 rounded-2xl bg-background-image-1">
      <div className="relative ">
        <Link className="absolute flex items-center gap-2 left-4 md:left-16 top-10" to={"/"}>
          <BsArrowLeft /> Back
        </Link>
      </div>
      <div className="flex flex-col items-center justify-around mt-20 md:flex-row sm:mt-0 md:mt-16">
        <div className="flex-1 ">
          <div className="mx-4 md:mx-16 ">
            <h1 className="pb-6 font-bold text-title">Dream World Wide in Jakarta</h1>
            <h3 className="pb-8 text-subtitle">By Samil Basayev</h3>
            <p className="text-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusantium itaque neque, maiores animi nam eaque optio.
            </p>
            <div className="flex gap-2 pt-4 font-bold ">
              <CiLocationOn />
              View Map
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 m-4 rounded-lg md:m-20 ">
          <div className="flex flex-col h-full gap-4 p-8 mx-4 bg-white md:mx-28 rounded-xl">
            <div className="flex flex-col gap-2 text-black">
              <h2 className="darkText text-subtitle">Date & Time</h2>
              <p className="lightText text-text ">Saturday August 21, 2021</p>
              <p className="text-blue-400 text-subtitle "> + Add to Calendar</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <MuiButton variant="contained" size="large" fullWidth>
                Book Now
              </MuiButton>
              <MuiButton variant="contained" size="large" fullWidth>
                See Program
              </MuiButton>
              <MuiButton variant="contained" size="large" fullWidth>
                Participants
              </MuiButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;

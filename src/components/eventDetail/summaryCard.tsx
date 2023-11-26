import MuiButton from "../_coreComponent/mui/button";
import { CiLocationOn } from "react-icons/ci";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import { event } from "../../types";

function slugify(str: string) {
  return String(str)
    .normalize("NFKD") // split accented characters into their base characters and diacritical marks
    .replace(/[\u0300-\u036f]/g, "") // remove all the accents, which happen to be all in the \u03xx UNICODE block.
    .trim() // trim leading or trailing whitespace
    .toLowerCase() // convert to lowercase
    .replace(/[^a-z0-9 -]/g, "") // remove non-alphanumeric characters
    .replace(/\s+/g, "-") // replace spaces with hyphens
    .replace(/-+/g, "-"); // remove consecutive hyphens
}

const SummaryCard = (props: { event: event; name: string }) => {
  const link = slugify(`${props.event.name}-${props.event._id}`);
  return (
    <div className="box-border flex flex-col mx-4 mt-8 text-white bg-center shadow-dark bg-cover md:mx-12 font-raleway h-4/5 rounded-2xl bg-background-image-1">
      <div className="relative ">
        <Link
          className="absolute flex items-center text-subtitle text-primary gap-2 left-4 md:left-16 top-10"
          to={"/"}
        >
          <BsArrowLeft className="w-6 h-6" /> Back
        </Link>
      </div>
      <div className="flex flex-col items-center justify-around mt-20 md:flex-row sm:mt-0 md:mt-16">
        <div className="flex-1 ">
          <div className="mx-4 md:mx-16 ">
            <h1 className="pb-6 font-bold text-title text-fifth">
              {props.event?.name}
            </h1>
            <h3 className="pb-8 text-subtitle text-fifth">
              {props.event?.description}
            </h3>
            <p className="text-title ">
              <Link
                className="text-primary"
                to={`/location/${props.event.location}`}
              >
                {props.event.location}
              </Link>
            </p>
            <div className="flex gap-2 pt-4 font-bold  text-white">
              <CiLocationOn className="w-6 h-6 text-primary" />
              View Map
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 m-4 rounded-lg md:m-20  ">
          <div className="flex flex-col h-full gap-4 p-8 mx-4 bg-fourth shadow-dark  md:mx-28 rounded-xl">
            <div className="flex flex-col gap-2 ">
              <h2 className="text-secondary text-subtitle">Date & Time</h2>
              <p className=" text-text text-fifth ">Saturday August 21, 2021</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <MuiButton
                variant="contained"
                route={`../ticket/${link}`}
                size="large"
                fullWidth
              >
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

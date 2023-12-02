import { Suspense, lazy } from "react";
const SummaryCard = lazy(() => import("./summaryCard"));
const DetailSection = lazy(() => import("./detailSection"));
const OtherEvents = lazy(() => import("./otherEvents"));
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { EventService } from "../../services/EventService";
import SEO from "../_coreComponent/seo";

const cities = [
  {
    "name": "Istanbul",
    "location": [41.0082, 28.9784] as [number,number]
  },
]
const EventDetail = () => {
  const { name = "" } = useParams();
  const id = name.split("-")[name.split("-").length - 1];
  const fetcher = () => EventService.getById(id);
  const { data, isLoading, error } = useSWR("eventByName", fetcher);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  const url = `http://localhost:5173/event/${data.name.replace(/\s/g, "-")}/${
    data._id
  }`;

  return (
    <Suspense fallback={<div>Loading...</div>}>

      <SEO
        title={data.name}
        description={data.description}
        url={`http://localhost:5173/event/${data.name.replace(/\s/g, "-")}/${
          data._id
        }`}
      />


      <div className=" mt-28">
        <SummaryCard event={data} name={name} eventDate={data.eventDate}  />
        <DetailSection event={data} url={url}   cities={cities}/>
        <div className="bg-white ">
          <OtherEvents />
        </div>
      </div>
    </Suspense>
  );
};

export default EventDetail;

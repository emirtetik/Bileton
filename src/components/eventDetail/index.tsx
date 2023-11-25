import { Suspense, lazy } from "react";
const SummaryCard = lazy(() => import("./summaryCard"));
const DetailSection = lazy(() => import("./detailSection"));
const OtherEvents = lazy(() => import("./otherEvents"));
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { EventService } from "../../services/EventService";
import SEO from "../_coreComponent/seo";

const EventDetail = () => {
  const { name = "" } = useParams();
  const id = name.split("-")[name.split("-").length - 1];
  const fetcher = () => EventService.getById(id);
  const { data, isLoading, error } = useSWR("eventByName", fetcher);
  console.log("dara", data);
  console.log("error", error);
  console.log("name", name);
  console.log("id", id);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  // data.photos = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  return (
    <Suspense fallback={<div>Loading...</div>}>

      <SEO
        title={data.name}
        description={data.description}
        url={`http://localhost:5173/event/${data.name.replace(/\s/g, "-")}/${
          data._id
        }`}
      />
      <div className="h-screen mt-28">
        <SummaryCard event={data} />
        <DetailSection event={data} />
        <div className="bg-white ">
          <OtherEvents />
        </div>
      </div>
    </Suspense>
  );
};

export default EventDetail;

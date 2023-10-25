import DetailSection from "./detailSection";
import OtherEvents from "./otherEvents";
import SummaryCard from "./summaryCard";

const EventDetail = () => {
  return (
    <div className=" h-screen p-10">
      <SummaryCard />
      <DetailSection />
      <OtherEvents />
    </div>
  );
};

export default EventDetail;

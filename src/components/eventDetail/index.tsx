import DetailSection from "./detailSection";
import SummaryCard from "./summaryCard";
import OtherEvents from "./otherEvents";

const EventDetail = () => {
  return (
    <div className="h-screen p-4">
      <SummaryCard />
      <DetailSection />
      <div className="bg-gray-100 ">
      <OtherEvents />
      </div> 
    </div>
  );
};

export default EventDetail;

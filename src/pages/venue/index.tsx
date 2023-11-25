import { useState } from "react";
import Card from "../../components/_coreComponent/card";
// import AosDiv from "../../components/_coreComponent/aosEffect";
import { EventService } from "../../services/EventService";
import { event } from "../../types";
import useSWR from "swr";
import SEO from "../../components/_coreComponent/seo";

const fetcher = () => EventService.getAll()
const Venue = () => {
  const [sortType, setSortType] = useState("a-z");
  const {data,isLoading,error} = useSWR("events", fetcher)
  //  console.log("venue", data)
  // const sortedCardList = [...data].sort((a, b) => {
  //   switch (sortType) {
  //     case "a-z":
  //       return a.venue.localeCompare(b.venue);
  //     default:
  //       return 0;
  //   }
  // });
  if (isLoading) {
   return <div>Loading...</div>;
 }
 if (error) {
   return <div>Error</div>;
 }

 
  return (
    <div className="bg-no-repeat bg-contain bg-background-image-4">
      <SEO
      title="Mekanlar"
      description="En son mekanlarımızı keşfedin."
      url="http://localhost:5173/venue"
      />
      <div className="px-0 sm:px-20 pt-28">
        <h1 className="mb-4 text-2xl font-extrabold text-white font-raleway">
          Mekanlar ({data.length})
        </h1>
        <div className="flex items-center justify-end px-10 mb-6 border-b border-white sm:py-2">
          <select
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
            className="w-1/5 font-bold text-white bg-transparent border-b border-gray-300 outline-none text-text font-raleway"
          >
            <option value="a-z">A-Z</option>
          </select>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-10">
          {data.map((card:event, index: number) => (
            // <AosDiv aosType="zoom-in" aosDuration={500}>
              <Card
              key={index}
                title={card.venue}
                city={card.city}
                image={card.image}
                size="small"
                className="flex flex-col justify-center text-left"
              />
            // </AosDiv>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Venue;

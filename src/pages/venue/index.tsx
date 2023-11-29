import { useState } from "react";
import Card from "../../components/_coreComponent/card";
import AosDiv from "../../components/_coreComponent/aosEffect";
import { VenueService } from "../../services/VenueService";
import { event } from "../../types";
import useSWR from "swr";
import SEO from "../../components/_coreComponent/seo";

const fetcher = () => VenueService.getAll();
const Venue = () => {
  const [sortType, setSortType] = useState("a-z");
  const { data, isLoading, error } = useSWR("venues1", fetcher);

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
          {data.map((card: event, index: number) => (
            <AosDiv aosType="zoom-in" aosDuration={500} key={index}>
              <Card
                route={`../venue/${card.name}`}
                title={card.name}
                city={card.city}
                size="small"
                className="flex flex-col justify-center text-left cursor-pointer"
              />
            </AosDiv>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Venue;

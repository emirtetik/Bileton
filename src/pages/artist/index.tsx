import { useState } from "react";
import Card from "../../components/_coreComponent/card";
import { cardList } from "../../constant";
import AosDiv from "../../components/_coreComponent/aosEffect";
const Artist = () => {
    const [sortType, setSortType] = useState("a-z");

    const sortedCardList = [...cardList].sort((a, b) => {
        switch (sortType) {
          case "a-z":
            return a.venue.localeCompare(b.venue);
          default:
            return 0;
        }
      });
  return (
    <div className="bg-no-repeat bg-contain bg-background-image-4">
      <div className="px-0 sm:px-20 pt-28">
        <h1 className="mb-4 text-2xl font-extrabold text-white font-raleway">
          Artistler ({cardList.length})
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
          {sortedCardList.map((card, index: number) => (
           <AosDiv aosType="zoom-in" aosDuration={500} >
             <Card
              key={index}
              title={card.venue}
              image={card.img}
              size="circle"
              className="text-center "
            />
           </AosDiv>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Artist;

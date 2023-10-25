import React from "react";

const OtherEvents = () => {
  const cards = [
    {
      title: "Film Festivali 2010",
      description: "Ankara, TR",
      img: "https://filmfestankara.org.tr//uploads/__category/029.jpg",
      date: "10 AUG",
    },
    {
      title: "Tropical Festivali 2025",
      description: "İstanbul, TR",
      img: "https://i.pinimg.com/236x/7d/d3/f1/7dd3f1108e0b5822aaf5defa27e562d5.jpg",
      date: "10 AUG",
    },
    {
      title: "Caz Festivali 2020",
      description: "İstanbul, TR",
      img: "https://cazkolik.com/storage/gorseller/20120608_021301.jpg",
      date: "10 AUG",
    },
    {
      title: "Caz Festivali 2025",
      description: "İstanbul, TR",
      img: "https://cazkolik.com/storage/gorseller/20120608_021341.jpg",
      date: "10 AUG",
    },
    {
      title: "Dans Festivali 2025",
      description: "İstanbul, TR",
      img: "https://marketplace.canva.com/EAExRafOmWE/1/0/1131w/canva-gri-ill%C3%BCstrasyon-dans-festivali-posteri-26SP97CNeOs.jpg",
      date: "10 AUG",
    },
    {
      title: "Caz Festivali 2025",
      description: "İstanbul, TR",
      img: "https://i.pinimg.com/originals/7e/99/9b/7e999ba5942bf7e1816ed609824bad78.jpg",
      date: "10 AUG",
    },
  ];
  return (
    <div className="flex flex-col gap-12 m-32 p-4">
      <h1>Other Events You May Like</h1>
      <div className="flex flex-wrap gap-4 justify-between ">
        {cards.map((card) => (
          <div className="text-black w-[350px] h-[340px] rounded-md shadow-lg hover:shadow-2xl">
            <div className="relative z-10 flex items-center  justify-center "></div>
            <img
              src={card.img}
              alt="events"
              className="rounded-t-md w-full max-h-[220px] object-cover"
            />
            <div className="flex p-4 gap-4 items-center">
              <div className=" p-4 font-medium rounded-md ">
                <div className="text-purple-700 darkText ">
                  {card.date.split(" ")[1]}
                </div>
                <div className="text-center darkText ">
                  {card.date.split(" ")[0]}
                </div>
              </div>
              <div>
                <h2 className="text-xl font-bold text-left">{card.title}</h2>
                <p className="text-left text-gray-600">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherEvents;

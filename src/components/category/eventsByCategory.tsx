import { useParams } from "react-router-dom";

import useSWR from "swr";
import { event, category } from "../../types";
import { CategoryService } from "../../services/CategoryService";

const fetcher = () => CategoryService.getAll();
function slugify(str) {
  return String(str)
    .normalize("NFKD") // split accented characters into their base characters and diacritical marks
    .replace(/[\u0300-\u036f]/g, "") // remove all the accents, which happen to be all in the \u03xx UNICODE block.
    .trim() // trim leading or trailing whitespace
    .toLowerCase() // convert to lowercase
    .replace(/[^a-z0-9 -]/g, "") // remove non-alphanumeric characters
    .replace(/\s+/g, "-") // replace spaces with hyphens
    .replace(/-+/g, "-"); // remove consecutive hyphens
}
const EventsBycategory = () => {
  const { data } = useSWR("categories", fetcher);
  const { name } = useParams();
  const cardList = [
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

  // const cards = data.filter((card: event) => card.name.includes(name || ""));
  const cards = cardList.filter((card) =>
    slugify(card.title).includes(slugify(name) || "")
  );
  return (
    <div className="flex flex-col gap-12 px-4 pt-8 mx-4 mt-8 md:p-4 lg:p-12 md:m-32 md:mt-12 font-raleway">
      <h1 className="text-center font-bold text-title">{name}</h1>
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 ">
        {cards.map((card) => (
          <div className="text-black w-full sm:w-[250px] h-[250px] rounded-md shadow-lg hover:shadow-2xl bg-white">
            <div className="relative z-10 flex items-center justify-center "></div>
            <img
              src={
                "https://i.pinimg.com/originals/7e/99/9b/7e999ba5942bf7e1816ed609824bad78.jpg"
              }
              alt="events"
              className="rounded-t-md w-full max-h-[150px] object-cover"
            />
            <div className="flex items-center gap-2 p-4">
              <div className="p-4 font-medium rounded-md ">
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

export default EventsBycategory;

import DropDown from "../../../_coreComponent/headless/dropDown";
import useSWR from "swr";
import { EventService } from "../../../../services/EventService";
import { event } from "../../../../types";

const fetcher = () => EventService.getAll();
function onlyUnique(value, index, array) {
  return array.indexOf(value) === index;
}

const Scene = () => {
  const { data, isLoading, error } = useSWR("events", fetcher);
  const uniqueLocation = data
    ?.map((event: event) => event.location)
    .filter(onlyUnique);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="">
      <DropDown
        linkActive={true}
        type="location"
        shadow="shadow-dark"
        width="w-full"
        background="bg-white"
        className="font-normal text-white px-4 font-raleway "
        title="Location"
        list={uniqueLocation.map((location: string) => ({ name: location }))}
      />
    </div>
  );
};

export default Scene;

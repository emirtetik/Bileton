import DropDown from "../../../_coreComponent/headless/dropDown";
import useSWR from "swr";
import { EventService } from "../../../../services/EventService";
import { event } from "../../../../types";

const fetcher = () => EventService.getAll();
function onlyUnique(value: string, index: number, array: string[]): boolean {
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
        background="bg-white "
        className="w-full px-4 font-normal text-white font-raleway "
        title="Location"
        list={uniqueLocation.map((location: string) => ({ name: location }))}
      />
    </div>
  );
};

export default Scene;

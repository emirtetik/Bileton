// useEvents.js
import useSWR from "swr";
import { EventService } from "./EventService";
import {event} from "../types"
const fetcher = () => EventService.getAll()

export const useCarousel = () => {
  const { data, isLoading, error } = useSWR("carousel", fetcher);

  
  
  const categoryTheatre = data?.filter((event:event) => {
    return event.category === 'tiyatro';
  });
  console.log("category",categoryTheatre)
  return { categoryTheatre, isLoading, error };
};

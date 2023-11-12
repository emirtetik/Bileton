import { BaseService } from "./BaseService";
// import { event } from "../types";

export const EventService = {
  getAll: async () => await BaseService.get("events"),
  getById: async (id: string) => await BaseService.get("event/" + id),
  // getSearched: async (search: string) => {
  //   const data = await BaseService.get("events");
  //   const filtered = data.filter((item: event) => {
  //     return item.name.toLowerCase().includes(search.toLowerCase());
  //   });
  //   return filtered;
  // },
};
import { BaseService } from "./BaseService";
// import { event } from "../types";

export const EventService = {
  getAll: async () => await BaseService.get("events"),
  get: async (id: string) => await BaseService.get("events/" + id),

  // getSearched: async (search: string) => {
  //   const data = await BaseService.get("products");
  //   const filtered = data.filter((item: event) => {
  //     return item.name.toLowerCase().includes(search.toLowerCase());
  //   });
  //   return filtered;
  // },
};

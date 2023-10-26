import { BaseService } from "./BaseService";
import { event } from "../types";

export const EventService = {
  getAll: async () => await BaseService.get("products"),
  get: async (id: string) => await BaseService.get("events/" + id),

  getSearched: async (search: string) => {
    const response = await BaseService.get("products");
    const data = response.data;
    const filtered = data.filter((item: event) => {
      return (
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase()) ||
        item.location.toLowerCase().includes(search.toLowerCase())
      );
    });
    return filtered;
  },
};

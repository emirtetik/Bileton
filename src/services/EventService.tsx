import { BaseService } from "./BaseService";

export const EventService = {
  getAll: async () => await BaseService.get("products"),
  get: async (id: string) => await BaseService.get("events/" + id),
};

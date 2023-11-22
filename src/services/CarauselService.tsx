import { BaseService } from "./BaseService";

export const CarouselService = {
  getAll: async () => await BaseService.get("events"),
  getById: async (id: string) => await BaseService.get("event/" + id),
  // filterByCategory: async (category:string) => {
  //   const events = await BaseService.get("events");
  //   return events.filter((e:string) => e.category === category);
  // },
};

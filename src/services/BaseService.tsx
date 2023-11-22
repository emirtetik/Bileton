const BASE_API_URL = "http://localhost:8080/api/event/";
// const BASE_API_URL = "https://event-api-tqwv.onrender.com/api/event/";

export const BaseService = {
  get: async (path: string) => {
    const response = await fetch(BASE_API_URL + path);
    return await response.json();
  },
};

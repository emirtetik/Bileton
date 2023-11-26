// const BASE_API_URL = "http://localhost:8080/api/event/";
const BASE_API_URL = "https://event-api-tqwv.onrender.com/api/event/";

export const BaseService = {
  get: async (path: string) => {
    const response = await fetch(BASE_API_URL + path);
    return await response.json();
  },
  put: async (path: string, data: any) => {
    try {
      const response = await fetch(`${BASE_API_URL}${path}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        return await response.json();
      } else {
        throw new Error("Failed to update data");
      }
    } catch (error) {
      console.error("Error updating data:", error);
      throw new Error("Failed to update data");
    }
  },
};

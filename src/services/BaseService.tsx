const BASE_API_URL = "https://northwind.vercel.app/api/";

export const BaseService = {
    get: async (path: string) => {
            const response = await fetch(BASE_API_URL + path);
            return await response.json();
    }
};

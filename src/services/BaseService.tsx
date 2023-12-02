import instance from "./axiosInstance" 
import { event } from "../types";


export const BaseService = {
  get: async (path:string) => {
    try {
      const response = await instance.get(path)
      return response.data;
    } catch (error) {
      if (error) {
        console.log('İstek iptal edildi');
      } else {
        throw error;
      } 
    }
  },

  put: async (path: string, data: event) => {
    try {
      const response = await instance.put(path,data);
      return response.data;
    } catch (error) {
      if (error) {
        console.log('İstek iptal edildi');
      } else {
        throw error;
      }
    }
  },
};

export type Account = {
  id: number;
  username: string;
  fullname: string;
  avatar: string;
};
export  interface searchProps {
  startDate: string;
  endDate: string;
  location: string ;
  category: string;
}



  export interface event {
    _id: string;
    image: string;
    name: string;
    description: string;
    date: string;
    location: string | [number,number];
    status: string;
    category: string;
    unitsInStock:number;
    photos: string[];
     
  }

  export interface category {
    name: string;
    id: string;
    description: string;
  }
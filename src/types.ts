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

export interface searchModalProps{
  venue:string
  city:string
  eventDate:string
  category: string
  name: string
}

  export interface event {
    _id: string;
    image: string;
    name: string;
    description: string;
    eventDate: string;
    startDate: string;
    eventHours: string;
    endDate: string;
    venue: string;
    city: string;
    location: string | [number,number];
    status: string;
    category: string;
     
  }

  export interface category {
    name: string;
    id: string;
    description: string;
  }
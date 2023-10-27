export type Account = {
  id: number;
  username: string;
  fullname: string;
  avatar: string;
};



export  interface searchProps {
    startDate: string;
    endDate: string;
    location: string;
    category: string;
  }


  export interface event {
    id: string;
    image: string;
    name: string;
    description: string;
    date: string;
    location: string;
    status: string;
    category: string;
  }

  export interface category {
    name: string;
    id: string;
    description: string;
  }
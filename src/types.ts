export type User = {
  username: string | null;
  isAdmin: boolean;
};

export  interface searchProps {
    startDate: string;
    endDate: string;
    location: string;
    category: string;
  }


  export interface event {
    image: string;
    name: string;
    description: string;
    date: string;
    location: string;
    status: string;
  }
export type Account = {
  id: number;
  username: string;
  fullname: string;
  avatar: string;
};



  export interface event {
    image: string;
    name: string;
    description: string;
    date: string;
    location: string;
    status: string;
  }

  export interface category {
    name: string;
    id: string;
    description: string;
  }
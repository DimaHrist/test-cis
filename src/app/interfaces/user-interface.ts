export interface IUserInterface {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: IUser[];
  ad: Ad;
}

interface Ad {
  company: string;
  url: string;
  text: string;
}

export interface IUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface IUserView {
  data: IUser;
  ad: Ad;
}

export interface IProfile {
  id: number;
  username: string;
  first_name: string;
  language: number;
  has_profile_picture: boolean;
  min_age: number;
  max_age: number;
  avatar: string;
  birth_date: string;
  description: string;
  email: string;
  gender: IGender[];
  user_photo: IUserPhoto[];
  status: IProfileStatus[];
  verified: boolean;
}

interface IProfileStatus {
  id: number;
  name: number;
  icon: string;
}

export interface IUserPhoto {
  id: number;
  user: number;
  photo: string;
}

export interface IGender {
  id: number;
  name: string;
}

export type TStatus = {
  id: number;
  name: string;
  icon: string;
};

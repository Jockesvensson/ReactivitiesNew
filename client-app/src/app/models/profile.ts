export interface IProfile {
  displayName: string;
  username: string;
  bio: string;
  image: string;
  following: Boolean;
  followersCount: number;
  followingCount: number;
  photos: IPhoto[];
}

export interface IPhoto {
  id: string;
  url: string;
  isMain: boolean;
}

export interface IUserActivity {
  id: string;
  title: string;
  category: string;
  date: Date;
}

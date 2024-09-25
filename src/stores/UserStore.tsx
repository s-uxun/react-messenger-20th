import { create } from "zustand";

type User = {
  id: number;
  name: string;
  img: string;
  instaId: string;
  phoneNum: string;
  birthday: string;
};

type userStore = {
  users: User[];
};

const mockUsers: User[] = [
  {
    id: 1,
    name: "유선",
    img: "",
    instaId: "s-uxun",
    phoneNum: "010-7178-5834",
    birthday: "2001-05-11",
  },
  {
    id: 2,
    name: "하경",
    img: "",
    instaId: "phk__15",
    phoneNum: "010-4154-4491",
    birthday: "2004-01-01",
  },
  {
    id: 3,
    name: "세오스",
    img: "",
    instaId: "ceos.sinchon",
    phoneNum: "010-1111-1111",
    birthday: "2001-09-27",
  },
  {
    id: 4,
    name: "디자인짱",
    img: "",
    instaId: "design",
    phoneNum: "010-2222-2222",
    birthday: "2004-09-30",
  },
];

export const useUserStore = create<userStore>((set) => ({ users: mockUsers }));

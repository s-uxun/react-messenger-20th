import { create } from "zustand";
import User from "./MockData/User.json";

type user = {
  id: number;
  name: string;
  img: string;
  instaId: string;
  phoneNum: string;
  birthday: string;
};

type userStore = {
  users: user[];
};

const useUserStore = create<userStore>((set) => ({ users: User }));

export default useUserStore;

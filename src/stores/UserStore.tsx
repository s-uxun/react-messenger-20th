import { create } from "zustand";
import UserData from "./MockData/User.json";
import { Profile } from "../assets/icons";
import { ReactNode } from "react";

export type User = {
  id: number;
  name: string;
  img: string | ReactNode;
  instaId: string;
  phoneNum: string;
  birthday: string;
  color?: string;
};

// 프사 색상 랜덤으로 부여하는 부분
const profileColors = ["#FCC", "#D193F6", "#FF7F7F"];
const assignDefaults = (users: User[]): User[] => {
  return users.map((user, index) => {
    if (user.img != "") {
      return { ...user, color: "" };
    } else {
      return {
        ...user,
        img: <Profile color={profileColors[index % profileColors.length]} />,
      };
    }
  });
};

type userStore = {
  users: User[];
};

const useUserStore = create<userStore>(() => ({
  users: assignDefaults(UserData),
}));

export default useUserStore;

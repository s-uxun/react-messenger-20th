import { create } from "zustand";
import UserData from "./MockData/User.json";

export type User = {
  id: number;
  name: string;
  img: string;
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
        img: "", // 빈 문자열로 설정
        color: profileColors[index % profileColors.length],
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

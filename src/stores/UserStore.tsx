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
    if (user.img !== "") {
      return { ...user, color: "" };
    } else {
      return {
        ...user,
        img: "",
        color: profileColors[index % profileColors.length],
      };
    }
  });
};

type UserStore = {
  users: User[];
  currentUserId: number;
  setCurrentUserId: (userId: number) => void;
  updatedUsers: User[];
  addUpdatedUser: (user: User) => void;
  currentUser: User | undefined;
};

// currentUser 로직 여기로 옮김
const useUserStore = create<UserStore>((set, get) => ({
  users: assignDefaults(UserData),
  currentUserId: (() => {
    const storedUserId = localStorage.getItem("currentUserId");
    return storedUserId ? Number(storedUserId) : 1; // 저장된 거 없으면 내 프로필을 기본으로 설정
  })(),
  setCurrentUserId: (userId: number) => {
    localStorage.setItem("currentUserId", userId.toString());
    const user = get().users.find((user) => user.id === userId);
    set({ currentUserId: userId, currentUser: user });
  },
  updatedUsers: [UserData.find((user) => user.id === 11)!],
  addUpdatedUser: (user: User) => {
    set((state) => {
      if (
        !state.updatedUsers.some((updatedUser) => updatedUser.id === user.id)
      ) {
        return { updatedUsers: [...state.updatedUsers, user] };
      }
      return state;
    });
  },
  currentUser: undefined,
}));

useUserStore.setState((state) => {
  const user = state.users.find((user) => user.id === state.currentUserId);
  return { currentUser: user };
});

export default useUserStore;

import { create } from "zustand";

type chatroom = {
  id: number;
  title: string;
  userIds: number[];
};

type chatroomStore = {
  chatrooms: chatroom[];
};

const mockChatrooms: chatroom[] = [
  {
    id: 1,
    title: "CEOS",
    userIds: [1, 2, 3, 4],
  },
  {
    id: 2,
    title: "",
    userIds: [1, 2],
  },
  {
    id: 3,
    title: "세오스 디자인",
    userIds: [1, 2, 3],
  },
];

const useChatroomStore = create<chatroomStore>((set) => ({
  chatrooms: mockChatrooms,
}));

export default useChatroomStore;

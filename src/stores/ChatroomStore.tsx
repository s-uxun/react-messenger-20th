import { create } from "zustand";
import Chatroom from "./MockData/Chatroom.json";

type chatroom = {
  id: number;
  title: string;
  userIds: number[];
  currentUserId: number;
};

type chatroomStore = {
  chatrooms: chatroom[];
};

const useChatroomStore = create<chatroomStore>((set) => ({
  chatrooms: Chatroom,
}));

export default useChatroomStore;

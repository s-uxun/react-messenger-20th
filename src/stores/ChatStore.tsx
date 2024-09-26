import { create } from "zustand";
import Chat from "./MockData/Chat.json";

type chat = {
  id: number;
  senderId: number;
  text: string[];
  time: string;
};

type chatByDate = {
  date: string;
  chats: chat[];
};

type chatByRoom = {
  roomId: number;
  chatByDate: chatByDate[];
};

type chatStore = {
  chatByRooms: chatByRoom[];
};

const useChatStore = create<chatStore>((set) => ({
  chatByRooms: Chat,
}));

export default useChatStore;

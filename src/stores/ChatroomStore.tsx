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
  setCurrentUserId: (roomId: number, userId: number) => void;
};

const useChatroomStore = create<chatroomStore>((set) => ({
  chatrooms: Chatroom,

  setCurrentUserId: (roomId: number, userId: number) =>
    set((state) => ({
      chatrooms: state.chatrooms.map((room) =>
        room.id === roomId ? { ...room, currentUserId: userId } : room
      ),
    })),
}));

export default useChatroomStore;

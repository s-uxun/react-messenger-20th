import { create } from "zustand";
import Chatroom from "./MockData/Chatroom.json";

type Chatroom = {
  id: number;
  title: string;
  userIds: number[];
  currentUserId: number;
  isFixed: boolean;
};

type ChatroomStore = {
  chatrooms: Chatroom[];
  setCurrentUserId: (roomId: number, userId: number) => void;
  toggleIsFixed: (roomId: number) => void;
};

const useChatroomStore = create<ChatroomStore>((set) => ({
  chatrooms: Chatroom,

  setCurrentUserId: (roomId: number, userId: number) =>
    set((state) => ({
      chatrooms: state.chatrooms.map((room) =>
        room.id === roomId ? { ...room, currentUserId: userId } : room
      ),
    })),

  toggleIsFixed: (roomId: number) =>
    set((state) => ({
      chatrooms: state.chatrooms.map((room) =>
        room.id === roomId ? { ...room, isFixed: !room.isFixed } : room
      ),
    })),
}));

export default useChatroomStore;

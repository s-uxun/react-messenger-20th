import { create } from "zustand";
import ChatroomData from "./MockData/Chatroom.json";
import useChatStore from "./ChatStore";

type Chatroom = {
  id: number;
  title: string;
  userIds: number[];
  isFixed: boolean;
};

type ChatroomStore = {
  chatrooms: Chatroom[];
  setCurrentUserId: (roomId: number, userId: number) => void;
  toggleIsFixed: (roomId: number) => void;
  addChatroom: (title: string, userIds: number[]) => void;
};

const useChatroomStore = create<ChatroomStore>((set) => ({
  chatrooms: ChatroomData as Chatroom[],

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

  addChatroom: (title: string, userIds: number[]) =>
    set((state) => {
      const newRoomId = state.chatrooms.length + 1;
      const newChatroom: Chatroom = {
        id: newRoomId,
        title,
        userIds,
        isFixed: false,
      };

      // 이렇게 빈 배열을 하나 추가해 두어야 채팅 보내짐
      useChatStore.getState().chatByRooms.push({
        roomId: newRoomId,
        allChats: [],
      });

      return {
        chatrooms: [...state.chatrooms, newChatroom],
      };
    }),
}));

export default useChatroomStore;

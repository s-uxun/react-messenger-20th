import { create } from "zustand";
import Chat from "./MockData/Chat.json";

type chat = {
  id: number;
  senderId: number;
  text: string;
  time: string;
};

type chatByDate = {
  date: string;
  chats: chat[];
};

type chatByRoom = {
  roomId: number;
  allChats: chatByDate[];
};

type chatStore = {
  chatByRooms: chatByRoom[];
  addChat: (roomId: number, newChat: chat, newChatDate: string) => void;
};

const useChatStore = create<chatStore>((set) => ({
  chatByRooms: Chat,

  // 오늘 날짜(newChatDate)에 해당하는 기존 데이터가 있으면 거기에 추가하고, 없으면 새 배열로 감싸서 추가하기
  addChat: (roomId: number, newChat: chat, newChatDate: string) =>
    set((state) => ({
      chatByRooms: state.chatByRooms.map((room) => {
        if (room.roomId !== roomId) return room;

        const existingDate = room.allChats.find(
          (chatDate) => chatDate.date === newChatDate
        );

        if (existingDate) {
          const updatedChats = [...existingDate.chats, newChat];

          return {
            ...room,
            allChats: room.allChats.map((chatDate) =>
              chatDate.date === newChatDate
                ? { ...chatDate, chats: updatedChats }
                : chatDate
            ),
          };
        }

        return {
          ...room,
          allChats: [...room.allChats, { date: newChatDate, chats: [newChat] }],
        };
      }),
    })),
}));

export default useChatStore;

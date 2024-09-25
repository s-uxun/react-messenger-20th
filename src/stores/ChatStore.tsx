import { create } from "zustand";

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

const mockChatByRooms: chatByRoom[] = [
  {
    roomId: 1,
    chatByDate: [
      {
        date: "2024년 9월 10일 화요일",
        chats: [
          {
            id: 1,
            senderId: 2,
            text: ["혹시 저번 주에 파일 압축 어디서 하셨나요...."],
            time: "오전 12:03",
          },
          {
            id: 2,
            senderId: 1,
            text: ["Acrobat에 pdf 압축 있음 ㄱㄱ"],
            time: "오전 12:07",
          },
          {
            id: 3,
            senderId: 3,
            text: [
              "그거 설정 어케 만져야...??",
              "이번 거 380인데 230까지 밖에 안 줄여지네ㅜ",
            ],
            time: "오전 12:20",
          },
          {
            id: 3,
            senderId: 1,
            text: [
              "흠냐링........",
              "크게 유의미하지는 않았지만.. 다운받아서 보라고 하죠머",
            ],
            time: "오전 12:30",
          },
          {
            id: 4,
            senderId: 2,
            text: ["감삼다,,", "왜 이렇게 파일이 커지지 ㅋ쿠ㅜ"],
            time: "오전 12:35",
          },
        ],
      },
    ],
  },
];

const useChatStore = create<chatStore>((set) => ({
  chatByRooms: mockChatByRooms,
}));

export default useChatStore;

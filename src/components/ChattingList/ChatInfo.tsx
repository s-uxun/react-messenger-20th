import { useState } from "react";
import styled from "styled-components";
import { Pin } from "../../assets/icons";
import { useNavigate } from "react-router-dom";
import useChatroomStore from "../../stores/ChatroomStore";
import useChatStore from "../../stores/ChatStore";
import useUserStore from "../../stores/UserStore";
import { useTitle } from "../hooks/useTitle";
import ProfileGroup from "./ProfileGroup";
import { newDate } from "../hooks/useTime";

interface ChatInfoProps {
  chatroomId: number;
}

const ChatInfo: React.FC<ChatInfoProps> = ({ chatroomId }) => {
  const navigate = useNavigate();
  const { chatrooms, toggleIsFixed } = useChatroomStore();
  const chatroom = chatrooms.find((room) => room.id === chatroomId);
  const { users } = useUserStore();
  const { chatByRooms } = useChatStore();
  const { getTitle } = useTitle();
  const [clickTimeout, setClickTimeout] = useState<NodeJS.Timeout | null>(null);

  if (!chatroom) return null;

  const currentUserId = chatroom.currentUserId;

  //각 채팅방의 유저 정보 구하기
  const participants = chatroom.userIds
    .filter((id) => id !== currentUserId)
    .map((id) => {
      const user = users.find((user) => user.id === id);
      return user ? { id: user.id, img: user.img, name: user.name } : null;
    })
    .filter(Boolean) as {
    id: number;
    img: string | React.ReactNode;
    name: string;
  }[];

  const isGroupChat = participants.length > 1;

  // 마지막 메세지 정보 구하기 (텍스트, 시간)
  const chatRoomData = chatByRooms.find((room) => room.roomId === chatroomId);
  let lastMessage = "";
  let lastMessageTime = "";
  let formattedTime = "";

  if (chatRoomData) {
    const allChats = chatRoomData.allChats;
    if (allChats.length > 0) {
      const lastDateChats = allChats[allChats.length - 1];
      const chats = lastDateChats.chats;
      if (chats.length > 0) {
        const lastChat = chats[chats.length - 1];
        lastMessage = lastChat.text;
        lastMessageTime = lastChat.time;

        const formatLastMessageTime = (
          dateString: string,
          timeString: string
        ) => {
          const today = newDate;

          // 어제 날짜 계산 (오늘 날짜에서 1빼기)
          const dayToday = parseInt(today.split(" ")[2].replace("일", ""));
          const yesterdayString = `${today.split(" ")[0]} ${
            today.split(" ")[1]
          } ${dayToday - 1}일 ${today.split(" ")[3]}`;

          if (dateString === today) {
            return timeString;
          } else if (dateString === yesterdayString) {
            return "어제";
          } else {
            const [_, month, day] = dateString.split(" ");
            return `${month} ${day}`;
          }
        };

        formattedTime = formatLastMessageTime(
          lastDateChats.date,
          lastMessageTime
        );
      }
    }
  }

  // 1클릭과 2클릭 구분 위해 timeout 사용 (이거 없으면 더블 클릭해도 그냥 채팅방 들어가짐)
  const handleClick = () => {
    if (clickTimeout) {
      clearTimeout(clickTimeout);
      setClickTimeout(null);
      toggleIsFixed(chatroomId); // 더블 클릭하면 고정 토글
    } else {
      const timeout = setTimeout(() => {
        navigate(`/chatroom/${chatroomId}`); // 한 번 클릭하면 채팅방 이동
        setClickTimeout(null);
      }, 300);
      setClickTimeout(timeout);
    }
  };

  return (
    <Container onClick={handleClick} isFixed={chatroom.isFixed}>
      <LeftSection>
        <ProfileGroup
          participants={participants}
          currentUserId={currentUserId}
        />
      </LeftSection>
      <MiddleSection>
        <TopRow>
          <Title>
            {getTitle(chatroom.title, chatroom.userIds, currentUserId)}
          </Title>
          {isGroupChat && (
            <ParticipantCount>{participants.length + 1}</ParticipantCount>
          )}
          {chatroom.isFixed && <StyledPin />}
        </TopRow>
        <BottomRow>
          <LastMessage>
            {lastMessage.length > 20
              ? `${lastMessage.substring(0, 20)}...`
              : lastMessage}
          </LastMessage>
        </BottomRow>
      </MiddleSection>
      <LastMessageTime>{formattedTime}</LastMessageTime>
    </Container>
  );
};

export default ChatInfo;

const Container = styled.div<{ isFixed: boolean }>`
  display: flex;
  padding: 1rem 1.25rem;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.gray10};
  }
`;

const LeftSection = styled.div`
  width: 3rem;
  height: 3rem;
`;

const MiddleSection = styled.div`
  flex: 1;
  padding-left: 1rem;
`;

const TopRow = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  ${({ theme }) => theme.font.Body_1_bold};
  color: ${({ theme }) => theme.color.black};
`;

const ParticipantCount = styled.div`
  ${({ theme }) => theme.font.Body_1_bold};
  color: ${({ theme }) => theme.color.gray30};
  margin-left: 0.5rem;
`;

const BottomRow = styled.div`
  margin-top: 0.25rem;
`;

const LastMessage = styled.div`
  ${({ theme }) => theme.font.Body_2_reg};
  color: ${({ theme }) => theme.color.gray70};
`;

const LastMessageTime = styled.div`
  ${({ theme }) => theme.font.Caption_med};
  color: ${({ theme }) => theme.color.gray30};
  margin-top: 0.25rem;
`;

const StyledPin = styled(Pin)`
  width: 1rem;
  height: 1rem;
  margin-left: 0.25rem;
`;

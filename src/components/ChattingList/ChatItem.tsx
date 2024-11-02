import styled from "styled-components";
import ChatInfo from "./ChatInfo";
import useChatroomStore from "../../stores/ChatroomStore";
import useUserStore from "../../stores/UserStore";

const ChatItem: React.FC = () => {
  const { chatrooms } = useChatroomStore();
  const currentUserId = useUserStore((state) => state.currentUserId);

  //고정된 채팅방이랑 안 고정된 채팅방 나누기 (+ currentUser가 들어있는 채팅방이어야 함)
  const fixedChatrooms = chatrooms.filter(
    (room) => room.isFixed && room.userIds.includes(currentUserId)
  );
  const nonFixedChatrooms = chatrooms.filter(
    (room) => !room.isFixed && room.userIds.includes(currentUserId)
  );

  return (
    <Container>
      {fixedChatrooms.map((room) => (
        <ChatInfo key={room.id} chatroomId={room.id} />
      ))}

      {fixedChatrooms.length > 0 && nonFixedChatrooms.length > 0 && (
        <SeperateLine />
      )}

      {nonFixedChatrooms.map((room) => (
        <ChatInfo key={room.id} chatroomId={room.id} />
      ))}
    </Container>
  );
};

export default ChatItem;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const SeperateLine = styled.div`
  height: 0.25rem;
  background-color: ${({ theme }) => theme.color.gray10};
`;

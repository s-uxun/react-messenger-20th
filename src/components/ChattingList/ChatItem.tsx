import styled from "styled-components";
import ChatInfo from "./ChatInfo";
import useChatroomStore from "../../stores/ChatroomStore";

const ChatItem: React.FC = () => {
  const { chatrooms } = useChatroomStore();

  //고정된 채팅방이랑 안 고정된 채팅방 나누기
  const fixedChatrooms = chatrooms.filter((room) => room.isFixed);
  const nonFixedChatrooms = chatrooms.filter((room) => !room.isFixed);

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

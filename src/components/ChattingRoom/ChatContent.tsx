import { useParams } from "react-router-dom";
import useChatStore from "../../stores/ChatStore";
import useChatroomStore from "../../stores/ChatroomStore";
import useUserStore from "../../stores/UserStore";
import { useCurrentUserId } from "../hooks/useUser";
import styled from "styled-components";

export function ChatContent() {
  const { roomId } = useParams<{ roomId: string }>();
  const currentUserId = useCurrentUserId();
  const users = useUserStore((state) => state.users);
  const allChats = useChatStore((state) =>
    state.chatByRooms.find((room) => room.roomId === Number(roomId))
  )?.allChats;

  return (
    <Wrapper>
      {allChats?.map((chatDate) => (
        <div key={chatDate.date}>
          <ChatDate>{chatDate.date}</ChatDate>

          {chatDate.chats.map((chat) => {
            const sender = users.find((user) => user.id === chat.senderId);
            const isCurrentUser = sender?.id === currentUserId;

            return (
              <Container key={chat.id}>
                {isCurrentUser ? (
                  <MyChat>
                    {chat.text.map((t, index) => (
                      <MyChatText key={index}>{t}</MyChatText>
                    ))}
                    <ChatTime>{chat.time}</ChatTime>
                  </MyChat>
                ) : (
                  <OtherChat>
                    <UserName>{sender?.name}</UserName>
                    {chat.text.map((t, index) => (
                      <OtherChatText key={index}>{t}</OtherChatText>
                    ))}
                    <ChatTime>{chat.time}</ChatTime>
                  </OtherChat>
                )}
              </Container>
            );
          })}
        </div>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div``;
const Container = styled.div``;
const ChatDate = styled.div``;
const MyChat = styled.div``;
const MyChatText = styled.div``;
const UserName = styled.div``;
const ChatTime = styled.div``;
const OtherChat = styled.div``;
const OtherChatText = styled.div``;

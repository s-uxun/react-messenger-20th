import { useParams } from "react-router-dom";
import useChatStore from "../../stores/ChatStore";
import useUserStore from "../../stores/UserStore";
import { Profile } from "../../assets/icons";
import { useCurrentUserId } from "../hooks/useUser";
import { styled, useTheme } from "styled-components";

export function ChatContent() {
  const { roomId } = useParams<{ roomId: string }>();
  const { currentUserId, setCurrentUserId } = useCurrentUserId();
  const users = useUserStore((state) => state.users);
  const allChats = useChatStore((state) =>
    state.chatByRooms.find((room) => room.roomId === Number(roomId))
  )?.allChats;

  //랜덤으로 프로필 svg 색상 지정
  const theme = useTheme();
  const profileColors = [
    theme.color.pink,
    theme.color.palepink1,
    theme.color.palepink2,
    theme.color.lavender,
  ];
  const getUserColor = (userId: number) => {
    return profileColors[userId % profileColors.length];
  };

  return (
    <Wrapper>
      {allChats?.map((chatDate) => (
        <div key={chatDate.date}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <ChatDate>{chatDate.date}</ChatDate>
          </div>
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
                    {sender?.img ? (
                      <UserImg src={sender.img} alt={sender.name} />
                    ) : (
                      <Profile
                        style={{ color: getUserColor(sender?.id || 0) }}
                      /> // 이미지가 없는 경우 랜덤 색상의 프로필 아이콘 렌더링
                    )}
                    <UserName
                      onClick={() =>
                        setCurrentUserId(Number(roomId), sender?.id || 0)
                      }
                    >
                      {sender?.name}
                    </UserName>
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
const ChatDate = styled.div`
  ${({ theme }) => theme.font.Caption_med};
  color: ${({ theme }) => theme.color.gray50};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 1.5rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0.75rem;
  border: 1px solid ${({ theme }) => theme.color.gray50};
`;
const MyChat = styled.div``;
const MyChatText = styled.div``;
const UserName = styled.div``;
const ChatTime = styled.div``;
const OtherChat = styled.div``;
const OtherChatText = styled.div``;
const UserImg = styled.img``;

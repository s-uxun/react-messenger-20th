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
          <FlexCenter>
            <ChatDate>{chatDate.date}</ChatDate>
          </FlexCenter>
          {chatDate.chats.map((chat) => {
            const sender = users.find((user) => user.id === chat.senderId);
            const isCurrentUser = sender?.id === currentUserId;
            return (
              <Container key={chat.id}>
                {isCurrentUser ? (
                  <MyChat>
                    <ChatTime>{chat.time}</ChatTime>
                    <FlexColumn>
                      {chat.text.map((t, index) => (
                        <MyChatText key={index}>{t}</MyChatText>
                      ))}
                    </FlexColumn>
                  </MyChat>
                ) : (
                  <OtherChat>
                    {sender?.img ? (
                      <UserImg
                        src={require(`../../assets/images/${sender?.img}`)}
                        alt={sender.name}
                      />
                    ) : (
                      <StyledProfile
                        style={{ color: getUserColor(sender?.id || 0) }}
                      />
                    )}
                    <FlexColumn>
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
                    </FlexColumn>
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

const Wrapper = styled.div`
  padding: 0 1.25rem;
`;
const Container = styled.div`
  margin-bottom: 1rem;
`;
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
  margin: 1.5rem 0;
`;
const MyChat = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
const MyChatText = styled.div`
  ${({ theme }) => theme.font.Body_1_med};
  color: ${({ theme }) => theme.color.gray100};
  background-color: ${({ theme }) => theme.color.palepink1};
  max-width: 13.8125rem;
  display: inline-block;
  padding: 0.375rem 0.75rem;
  border-radius: 0.75rem;
  word-wrap: break-word;
  flex-grow: 0;
  align-self: flex-end;
  margin-left: 0.25rem;
`;
const UserName = styled.div`
  ${({ theme }) => theme.font.Caption_med};
  color: ${({ theme }) => theme.color.gray70};
  margin-bottom: 0.5rem;
`;
const ChatTime = styled.div`
  ${({ theme }) => theme.font.Caption_med};
  color: ${({ theme }) => theme.color.gray50};
  align-content: flex-end;
`;
const OtherChat = styled.div`
  display: flex;
  flex-direction: row;
`;
const OtherChatText = styled.div`
  ${({ theme }) => theme.font.Body_1_med};
  color: ${({ theme }) => theme.color.gray100};
  background-color: white;
  max-width: 13.8125rem;
  display: inline-block;
  padding: 0.375rem 0.75rem;
  border-radius: 0.75rem;
  word-wrap: break-word;
  flex-grow: 0;
  align-self: flex-start;
  margin-right: 0.25rem;
`;
const UserImg = styled.img`
  border-radius: 50%;
  width: 2.25rem;
  height: 2.25rem;
  margin-right: 0.5rem;
`;

const StyledProfile = styled(Profile)`
  width: 2.25rem;
  height: 2.25rem;
  margin-right: 0.5rem;
`;

const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

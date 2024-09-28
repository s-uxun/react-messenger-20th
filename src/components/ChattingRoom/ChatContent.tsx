import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import useChatStore from "../../stores/ChatStore";
import useUserStore from "../../stores/UserStore";
import { Profile } from "../../assets/icons";
import { useCurrentUserId } from "../hooks/useUser";
import { jelloHorizontal } from "../../styles/Keyframe";
import { styled, useTheme, css } from "styled-components";

interface Chat {
  id: number;
  senderId: number;
  text: string;
  time: string;
}

interface GroupedChat {
  senderId: number;
  time: string;
  messages: Chat[];
}

interface ChatDate {
  date: string;
  chats: Chat[];
}

interface User {
  id: number;
  img?: string;
  name: string;
}

export function ChatContent({ newChatIds }: { newChatIds: number[] }) {
  const { roomId } = useParams<{ roomId: string }>();
  const { currentUserId, setCurrentUserId } = useCurrentUserId();
  const users: User[] = useUserStore((state) => state.users);
  const allChats = useChatStore((state) =>
    state.chatByRooms.find((room) => room.roomId === Number(roomId))
  )?.allChats;

  // 랜덤으로 프로필 SVG 색상 지정
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

  // 채팅 보내면 자동으로 밑으로 스크롤
  const lastChatRef = useRef<HTMLDivElement>(null);
  const autoScroll = () => {
    lastChatRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    setTimeout(() => {
      autoScroll();
    }, 0);
  }, [newChatIds]);

  // 같은 time(~시 ~분)동안 보낸 메시지들 그룹화하기
  const groupMessages = (chats: Chat[]): GroupedChat[] =>
    chats.reduce((groups, chat) => {
      const lastGroup = groups[groups.length - 1];
      if (
        lastGroup &&
        lastGroup.senderId === chat.senderId &&
        lastGroup.time === chat.time
      ) {
        lastGroup.messages.push(chat);
      } else {
        groups.push({
          senderId: chat.senderId,
          time: chat.time,
          messages: [chat],
        });
      }
      return groups;
    }, [] as GroupedChat[]);

  return (
    <Wrapper>
      {allChats?.map((chatDate: ChatDate) => (
        <div key={chatDate.date}>
          <FlexCenter>
            <ChatDate>{chatDate.date}</ChatDate>
          </FlexCenter>
          {groupMessages(chatDate.chats).map((group, groupIndex) => {
            const sender = users.find((user) => user.id === group.senderId);
            const isCurrentUser = group.senderId === currentUserId;
            const lastMessage = group.messages[group.messages.length - 1];
            const isNewLine = newChatIds.includes(lastMessage.id);

            return (
              <Container key={`${group.senderId}-${group.time}-${groupIndex}`}>
                {isCurrentUser ? (
                  <MyChat>
                    {group.messages.slice(0, -1).map((chat) => (
                      <MyChatText key={chat.id} isNewLine={false}>
                        {chat.text}
                      </MyChatText>
                    ))}
                    <MyLastChat>
                      <MyChatText key={lastMessage.id} isNewLine={isNewLine}>
                        {lastMessage.text}
                      </MyChatText>
                      <ChatTime>{group.time}</ChatTime>
                    </MyLastChat>
                  </MyChat>
                ) : (
                  <OtherChat>
                    {sender?.img ? (
                      <UserImg
                        src={require(`../../assets/images/${sender.img}`)}
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
                      {group.messages.slice(0, -1).map((chat) => (
                        <OtherChatText key={chat.id}>{chat.text}</OtherChatText>
                      ))}
                      <OtherLastChat>
                        <OtherChatText key={lastMessage.id}>
                          {lastMessage.text}
                        </OtherChatText>
                        <ChatTime>{group.time}</ChatTime>
                      </OtherLastChat>
                    </FlexColumn>
                  </OtherChat>
                )}
              </Container>
            );
          })}
        </div>
      ))}
      <div ref={lastChatRef} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${({ theme }) => theme.scroll.none};
  padding: 0 1.25rem;
  overflow-y: auto;
  height: 100%;
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
  flex-direction: column;
  gap: 0.25rem;
`;

const MyChatText = styled.div<{ isNewLine: boolean }>`
  ${({ theme }) => theme.font.Body_1_med};
  color: ${({ theme }) => theme.color.gray100};
  background-color: ${({ theme }) => theme.color.palepink1};
  max-width: 13.8125rem;
  padding: 0.375rem 0.75rem;
  border-radius: 0.75rem;
  word-wrap: break-word;
  align-self: flex-end;
  ${({ isNewLine }) =>
    isNewLine &&
    css`
      animation: ${jelloHorizontal} 0.7s both;
    `}
`;

const MyLastChat = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 0.25rem;
`;

const OtherChat = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

const OtherChatText = styled.div`
  ${({ theme }) => theme.font.Body_1_med};
  color: ${({ theme }) => theme.color.gray100};
  background-color: white;
  max-width: 13.8125rem;
  padding: 0.375rem 0.75rem;
  border-radius: 0.75rem;
  word-wrap: break-word;
  align-self: flex-start;
`;

const OtherLastChat = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const UserName = styled.div`
  ${({ theme }) => theme.font.Caption_med};
  color: ${({ theme }) => theme.color.gray70};
  margin-bottom: 0.25rem;
  cursor: url(https://s-uxun.github.io/CDN/Rainbow.cur), pointer;
  width: fit-content;
`;

const ChatTime = styled.div`
  ${({ theme }) => theme.font.Caption_med};
  color: ${({ theme }) => theme.color.gray50};
  align-self: flex-end;
`;

const UserImg = styled.img`
  border-radius: 50%;
  width: 2.25rem;
  height: 2.25rem;
`;

const StyledProfile = styled(Profile)`
  width: 2.25rem;
  height: 2.25rem;
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

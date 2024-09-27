import { useState, useEffect, useRef, ChangeEvent, KeyboardEvent } from "react";
import { useParams } from "react-router-dom";
import useChatStore from "../../stores/ChatStore";
import { newDate, getCurrentTime } from "../hooks/useTime";
import { useCurrentUserId } from "../hooks/useUser";
import styled from "styled-components";
import { Plus, Emoji, HashTag, Send } from "../../assets/icons";

export function ChatInput() {
  const currentUserId = useCurrentUserId();
  const addChat = useChatStore((state) => state.addChat);
  const chatByRooms = useChatStore((state) => state.chatByRooms);
  const { roomId } = useParams<{ roomId: string }>();

  // useRef를 활용하여 textarea의 DOM 요소에 접근, 사용자가 입력한 텍스트 길이에 따라 textarea의 높이 조절
  const [value, setValue] = useState<string>("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "1.5rem";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [value]);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const handleSend = () => {
    if (!value.trim() || !currentUserId || !roomId) return; // 입력값이나 현재 유저 id나 채팅방 id가 없으면 전송 X

    const newChat = {
      id: Date.now(),
      senderId: currentUserId,
      text: [value],
      time: getCurrentTime(),
    };

    addChat(Number(roomId), newChat, newDate);
    setValue("");
  };

  // 엔터키로 전송할 수 있도록 처리 (Shift + Enter로 줄바꿈)
  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // 조건부 렌더링으로 아이콘 지정
  const LastIcon = value.trim() ? Send : HashTag;

  return (
    <Container>
      <StyledIcon as={Plus} />
      <InputBox>
        <Textarea
          ref={textareaRef}
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <Icons>
          <StyledIcon as={Emoji} style={{ marginRight: "0.5rem" }} />
          <StyledIcon as={LastIcon} onClick={handleSend} />
        </Icons>
      </InputBox>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  padding: 0.375rem 0.75rem;
  align-items: center;
  column-gap: 0.75rem;
  justify-content: space-between;
  background-color: white;
  max-width: 100vw;
`;

const InputBox = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: end;
  justify-content: space-between;
  padding: 0.375rem 0.75rem;
  column-gap: 0.5rem;
  background-color: ${({ theme }) => theme.color.gray5};
  border-radius: 1.875rem;
  border: 1px solid ${({ theme }) => theme.color.gray40};
  max-width: calc(100% - 2.5rem);
`;

const Textarea = styled.textarea`
  ${({ theme }) => theme.font.Body_1_med};
  flex-grow: 1;
  max-height: 4.5rem;
  resize: none;
  outline: none;
  border: none;
  background-color: ${({ theme }) => theme.color.gray5};
  ${({ theme }) => theme.scroll.none};
`;

const StyledIcon = styled.svg`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  flex-shrink: 0;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 0.1rem;
`;

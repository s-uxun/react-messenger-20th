import { useState, useEffect, useRef, ChangeEvent } from "react";

import useChatStore from "../../stores/ChatStore";

import styled from "styled-components";

import { Plus, Emoji, HashTag, Send } from "../../assets/icons";

export function ChatInput() {
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

  // 조건부 렌더링으로 아이콘 지정
  const LastIcon = value.trim() ? Send : HashTag;

  return (
    <Container>
      <StyledIcon as={Plus} />
      <InputBox>
        <Textarea ref={textareaRef} value={value} onChange={handleChange} />
        <Icons>
          <StyledIcon as={Emoji} style={{ marginRight: "0.5rem" }} />
          <StyledIcon as={LastIcon} />
        </Icons>
      </InputBox>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 0.375rem 0.75rem;
  align-items: center;
  column-gap: 0.75rem;
  justify-content: space-between;
  background-color: white;
`;

const InputBox = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  flex-grow: 1;
  padding: 0.375rem 0.75rem;
  column-gap: 0.5rem;
  background-color: ${({ theme }) => theme.color.gray5};
  border-radius: 1.875rem;
  border: 1px solid ${({ theme }) => theme.color.gray40};
`;

const Textarea = styled.textarea`
  ${({ theme }) => theme.font.Body_1_med};
  flex-grow: 1;
  max-height: 4.5rem;
  flex-shrink: 0;
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
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 0.1rem;
`;

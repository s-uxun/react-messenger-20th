import { useState, useEffect, useRef, ChangeEvent } from "react";

import useChatStore from "../../stores/ChatStore";

import styled from "styled-components";

import { Plus } from "../../assets/icons";
import { Emoji } from "../../assets/icons";
import { HashTag } from "../../assets/icons";

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

  return (
    <Container>
      <Plus style={{ width: "1.5rem", cursor: "pointer" }} />
      <InputBox>
        <Textarea ref={textareaRef} value={value} onChange={handleChange} />
        <Emoji style={{ width: "1.5rem", cursor: "pointer" }} />
        <HashTag style={{ width: "1.5rem", cursor: "pointer" }} />
      </InputBox>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  padding: 0.375rem 0.75rem 2.625rem 0.75rem;
  align-items: center;
  justify-content: space-between;
  background-color: white;
`;

const InputBox = styled.div`
  display: flex;
`;

const Textarea = styled.textarea`
  ${({ theme }) => theme.font.Body_1_med};
  width: 14.25rem;
  max-height: 4.5rem;
  flex-shrink: 0;
  resize: none;
  ${({ theme }) => theme.scroll.none};
`;

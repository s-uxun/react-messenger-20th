import useChatStore from "../../stores/ChatStore";

import styled from "styled-components";

import { Plus } from "../../assets/icons";
import { Emoji } from "../../assets/icons";
import { HashTag } from "../../assets/icons";

export function ChatInput() {
  return (
    <Container>
      <Plus style={{ width: "1.5rem", cursor: "pointer" }} />
      <InputBox>
        <Textarea />
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
  height: 1.5rem;
  max-height: 4rem;
  flex-shrink: 0;
  resize: none;
  ${({ theme }) =>
    theme.scroll
      .none}; // 이 부분을 위로 올리면 resize나 height가 적용이 안 되고, 밑으로 내리면 적용이 됩니다. 해당 theme에는 스크롤바를 안 보이게 하는 코드밖에 없는데 왜 이런 걸까요..?
`;

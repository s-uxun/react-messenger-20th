import styled from "styled-components";
import { MobileTop } from "../components/MobileTop";

const ChattingPage = () => {
  return (
    <Wrapper>
      <MobileTop />
      <p>채팅방</p>
    </Wrapper>
  );
};
export default ChattingPage;
const Wrapper = styled.div`
  height: calc(var(--vh, 1vh) * 100);
  background-color: ${({ theme }) => theme.color.gray10};
`;

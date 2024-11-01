import { Friend } from "../../assets/icons";
import { Chat } from "../../assets/icons";
import { OpenChat } from "../../assets/icons";
import { Store } from "../../assets/icons";
import { More } from "../../assets/icons";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const MenuBar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // url에 따라 동적으로 텍스트와 svg 색상을 변경
  const isActive = (path: string) => currentPath.includes(path);

  return (
    <Wrapper>
      <Container isActive={isActive("friendlist")}>
        <Icon>
          <Friend color={isActive("friendlist") ? "#181A1B" : "#BFC2C8"} />
        </Icon>
        <p>친구</p>
      </Container>
      <Container isActive={isActive("chatlist")}>
        <Icon>
          <Chat color={isActive("chatlist") ? "#181A1B" : "#BFC2C8"} />
        </Icon>
        <p>채팅</p>
      </Container>
      <Container isActive={isActive("openchatlist")}>
        <Icon>
          <OpenChat color={isActive("openchatlist") ? "#181A1B" : "#BFC2C8"} />
        </Icon>
        <p>오픈채팅</p>
      </Container>
      <Container isActive={isActive("shopping")}>
        <Icon>
          <Store color={isActive("shopping") ? "#181A1B" : "#BFC2C8"} />
        </Icon>
        <p>쇼핑</p>
      </Container>
      <Container isActive={isActive("setting")}>
        <Icon>
          <More color={isActive("setting") ? "#181A1B" : "#BFC2C8"} />
        </Icon>
        <p>더보기</p>
      </Container>
    </Wrapper>
  );
};

export default MenuBar;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 2rem;
  padding: 0.75rem 1.13rem;
  border-top: 1px solid ${({ theme }) => theme.color.gray20};
`;

const Container = styled.div<{ isActive: boolean }>`
  display: flex;
  flex-direction: column;
  height: 2.8125rem;
  width: 2.625rem;
  align-items: center;
  row-gap: 0.25rem;
  cursor: pointer;
  p {
    ${({ theme }) => theme.font.Caption_med};
    color: ${({ isActive, theme }) =>
      isActive ? theme.color.black : theme.color.gray30};
  }
`;

const Icon = styled.div`
  width: 1.5rem;
  height: 1.5rem;
`;

import { Friend } from "../../assets/icons";
import { Chat } from "../../assets/icons";
import { OpenChat } from "../../assets/icons";
import { Store } from "../../assets/icons";
import { More } from "../../assets/icons";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";

const MenuBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  // url에 따라 동적으로 텍스트와 svg 색상을 변경
  const menuItems = [
    { path: "friendlist", label: "친구", Icon: Friend },
    { path: "chatlist", label: "채팅", Icon: Chat },
    { path: "openchat", label: "오픈채팅", Icon: OpenChat },
    { path: "shopping", label: "쇼핑", Icon: Store },
    { path: "setting", label: "더보기", Icon: More },
  ];

  return (
    <Wrapper>
      {menuItems.map(({ path, label, Icon }) => {
        const isActive = currentPath.includes(path);
        const iconColor = isActive ? "#181A1B" : "#BFC2C8";

        return (
          <Container
            key={path}
            isActive={isActive}
            onClick={() => navigate(`/${path}`)}
          >
            <IconWrapper>
              <Icon color={iconColor} />
            </IconWrapper>
            <p>{label}</p>
          </Container>
        );
      })}
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

const IconWrapper = styled.div`
  width: 1.5rem;
  height: 1.5rem;
`;

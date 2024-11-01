import {
  Search,
  PlusChat,
  Setting,
  AddFriend,
  Headphone,
} from "../../assets/icons";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

export function ListTitle() {
  const location = useLocation();
  const currentPath = location.pathname;

  const isFriendList = currentPath.includes("friendlist");
  const isChatList = currentPath.includes("chatlist");

  return (
    <Contianer>
      <Left>{isFriendList ? "친구" : isChatList ? "채팅" : ""}</Left>
      <Right>
        <Search style={{ width: "1.5rem", cursor: "pointer" }} />
        {isFriendList && (
          <>
            <AddFriend style={{ width: "1.5rem", cursor: "pointer" }} />
            <Headphone style={{ width: "1.5rem", cursor: "pointer" }} />
          </>
        )}
        {isChatList && (
          <PlusChat style={{ width: "1.5rem", cursor: "pointer" }} />
        )}
        <Setting style={{ width: "1.5rem", cursor: "pointer" }} />
      </Right>
    </Contianer>
  );
}

const Contianer = styled.div`
  display: flex;
  padding: 0.56rem 1rem 0.13rem;
  align-items: center;
  justify-content: space-between;
  height: 3rem;
  background-color: white;
  flex-shrink: 0;
  margin-bottom: 1rem;
`;

const Left = styled.p`
  ${({ theme }) => theme.font.Headline2}
  color: ${({ theme }) => theme.color.gray100}
`;

const Right = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
`;

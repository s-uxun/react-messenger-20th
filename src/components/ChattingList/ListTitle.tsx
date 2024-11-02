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

  const pageTitles: Record<string, string> = {
    friendlist: "친구",
    chatlist: "채팅",
    openchat: "오픈채팅",
    shopping: "쇼핑",
    setting: "더보기",
  };

  // 위에서 정의한 path와 연결된 문구를 title로 설정
  const title =
    Object.entries(pageTitles).find(([key]) =>
      currentPath.includes(key)
    )?.[1] || "";

  return (
    <Contianer>
      <Left>{title}</Left>
      <Right>
        <Search style={{ width: "1.5rem", cursor: "pointer" }} />
        {currentPath.includes("friendlist") && (
          <>
            <AddFriend style={{ width: "1.5rem", cursor: "pointer" }} />
            <Headphone style={{ width: "1.5rem", cursor: "pointer" }} />
          </>
        )}
        {currentPath.includes("chat") && (
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

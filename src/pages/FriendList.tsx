import { useState, useEffect } from "react";
import useUserStore, { User } from "../stores/UserStore";
import styled from "styled-components";
import { MobileTop } from "../components/MobileTop";
import { ListTitle } from "../components/ChattingList/ListTitle";
import { ChatBottom } from "../components/ChattingRoom/ChatBottom";
import AllFriends from "../components/FriendList/AllFriends";
import MenuBar from "../components/ChattingList/MenuBar";

const FriendList = () => {
  const users = useUserStore((state) => state.users);
  const [currentUser, setCurrentUser] = useState<User | null>(
    users.find((user) => user.id === 1) || null
  );
  // 일단 id값이 1인 내 데이터를 기본 currentUser로 설정

  // 로컬에서 currentUser 불러옴
  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
  }, []);

  // currentUser 로컬에 저장
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
    }
  }, [currentUser]);

  return (
    <Wrapper>
      <MobileTop />
      <ListTitle />
      <ContentStyle>
        <AllFriends currentUser={currentUser} setCurrentUser={setCurrentUser} />
      </ContentStyle>
      <MenuBar />
      <ChatBottom />
    </Wrapper>
  );
};
export default FriendList;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(var(--vh, 1vh) * 100);
`;

const ContentStyle = styled.div`
  ${({ theme }) => theme.scroll.none};
  flex-grow: 1;
  overflow-y: auto;
`;

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useUserStore, { User } from "../../stores/UserStore";
import useChatroomStore from "../../stores/ChatroomStore";
import UserInfo from "./UserInfo";
import UpdatedProfile from "./UpdatedProfile";
import BirthdayUser from "./BirthdayUser";
import { Up, Down } from "../../assets/icons";

interface AllFriendsProps {
  currentUser: User | null;
  setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const AllFriends: React.FC<AllFriendsProps> = ({
  currentUser,
  setCurrentUser,
}) => {
  const navigate = useNavigate();
  const users = useUserStore((state) => state.users);
  const friends = users.filter((user) => user.id !== currentUser?.id);
  const handleUserClick = (user: User) => {
    setCurrentUser(user);
  };

  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpanded = () => setIsExpanded(!isExpanded);

  return (
    <Container>
      {currentUser && (
        <UserInfo
          user={currentUser}
          onClick={() => alert("나중에 프로필 편집 창으로 클릭 이벤트 변경")}
          size="large"
        />
      )}
      <UpdatedProfile />
      <BirthdayUser />
      <Friends isExpended={isExpanded}>
        <FHeader>
          <FTitle>친구</FTitle>
          <FCount>{friends.length}</FCount>
          <ToggleButton onClick={toggleExpanded}>
            {isExpanded ? <Up /> : <Down />}
          </ToggleButton>
        </FHeader>
        <FList isExpanded={isExpanded}>
          {friends.map((friend) => (
            <UserInfo
              key={friend.id}
              user={friend}
              onClick={() => handleUserClick(friend)}
              onDoubleClick={() => alert("나중에 채팅방으로 클릭 이벤트 변경")}
            />
          ))}
        </FList>
      </Friends>
    </Container>
  );
};

export default AllFriends;

const Container = styled.div``;

const FHeader = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  height: 1.25rem;
  margin-top: 0.75rem;
`;

const FTitle = styled.p`
  ${({ theme }) => theme.font.Caption_med};
  color: ${({ theme }) => theme.color.gray50};
  margin-left: 1.25rem;
`;

const FCount = styled.span`
  ${({ theme }) => theme.font.Caption_med};
  color: ${({ theme }) => theme.color.gray30};
  margin-left: 0.5rem;
`;

const ToggleButton = styled.div`
  position: absolute;
  right: 1.25rem;
  cursor: pointer;

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

const Friends = styled.div<{ isExpended: Boolean }>`
  margin-top: 0.75rem;
  border-top: 1px solid ${({ theme }) => theme.color.gray10};
  border-bottom: 1px solid ${({ theme }) => theme.color.gray10};
  background-color: ${({ isExpended, theme }) =>
    isExpended ? theme.color.gray5 : "none"};
`;

const FList = styled.div<{ isExpanded: boolean }>`
  overflow: hidden;
  max-height: ${({ isExpanded }) =>
    isExpanded
      ? "none"
      : "4.3rem"}; // 토글 닫힌 상태에서는 가장 상단 1개만 보임
`;

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useUserStore, { User } from "../../stores/UserStore";
import useChatroomStore from "../../stores/ChatroomStore";
import UserInfo from "./UserInfo";
import BirthdayUser from "./BirthdayUser";
import { Up, Down } from "../../assets/icons";

const AllFriends = () => {
  const users = useUserStore((state) => state.users);
  const currentUserId = useUserStore((state) => state.currentUserId);
  const setCurrentUserId = useUserStore((state) => state.setCurrentUserId);

  const currentUser = users.find((user) => user.id === currentUserId);
  const friends = users.filter((user) => user.id !== currentUserId);

  const navigate = useNavigate();
  const { chatrooms, addChatroom } = useChatroomStore();

  const handleUserClick = (user: User) => {
    if (user.id === currentUserId) {
      navigate(`/edit/${currentUserId}`);
    } else {
      setCurrentUserId(user.id);
    }
  };

  const handleDoubleClick = (user: User) => {
    let chatroom = chatrooms.find(
      (room) =>
        room.userIds.includes(currentUser!.id) &&
        room.userIds.includes(user.id) &&
        room.userIds.length === 2
    );

    if (!chatroom) {
      addChatroom("", [currentUserId, user.id]);
      chatroom = chatrooms[chatrooms.length];
    }

    if (chatroom) {
      navigate(`/chatroom/${chatroom.id}`);
    }
  };

  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpanded = () => setIsExpanded(!isExpanded);

  return (
    <Container>
      {currentUser && (
        <UserInfo
          user={currentUser}
          onClick={() => handleUserClick(currentUser)}
          size="large"
        />
      )}
      <BirthdayUser />
      <Friends isExpanded={isExpanded}>
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
              onDoubleClick={() => handleDoubleClick(friend)}
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

const Friends = styled.div<{ isExpanded: Boolean }>`
  margin-top: 0.5rem;
  border-top: 1px solid ${({ theme }) => theme.color.gray10};
  border-bottom: 1px solid ${({ theme }) => theme.color.gray10};
  background-color: ${({ isExpanded, theme }) =>
    isExpanded ? theme.color.gray5 : "none"};
`;

const FList = styled.div<{ isExpanded: boolean }>`
  overflow: hidden;
  max-height: ${({ isExpanded }) =>
    isExpanded
      ? "none"
      : "4.3rem"}; // 토글 닫힌 상태에서는 가장 상단 1개만 보임
`;

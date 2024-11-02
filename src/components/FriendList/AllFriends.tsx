import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useUserStore, { User } from "../../stores/UserStore";
import useChatroomStore from "../../stores/ChatroomStore";
import UserInfo from "./UserInfo";
import UpdatedProfile from "./UpdatedProfile";
import BirthdayUser from "./BirthdayUser";

interface AllFriendsProps {
  currentUser: User | null;
  setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const AllFriends: React.FC<AllFriendsProps> = ({
  currentUser,
  setCurrentUser,
}) => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Container>
      {currentUser && <UserInfo user={currentUser} onClick={() => alert()} />}
      <UpdatedProfile />
      <BirthdayUser />
    </Container>
  );
};

export default AllFriends;

const Container = styled.div``;

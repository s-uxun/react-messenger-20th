import styled from "styled-components";
import useUserStore, { User } from "../../stores/UserStore";
import UserInfo from "./UserInfo";

const AllFriends = () => {
  const users = useUserStore((state) => state.users);
  const currentUser = users.find((user) => user.id === 1);

  return (
    <Container>
      {currentUser && <UserInfo user={currentUser} onClick={() => alert()} />}
    </Container>
  );
};

export default AllFriends;

const Container = styled.div``;

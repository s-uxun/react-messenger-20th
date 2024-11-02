import styled from "styled-components";
import useUserStore, { User } from "../../stores/UserStore";
import UserInfo from "./UserInfo";
import UpdatedProfile from "./UpdatedProfile";
import BirthdayUser from "./BirthdayUser";

const AllFriends = () => {
  const users = useUserStore((state) => state.users);
  const currentUser = users.find((user) => user.id === 1);

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

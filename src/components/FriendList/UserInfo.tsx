import styled from "styled-components";
import { User } from "../../stores/UserStore";

interface UserInfoProps {
  user: User;
  onClick: () => void;
}

const UserInfo: React.FC<UserInfoProps> = ({ user, onClick }) => {
  return (
    <Container onClick={onClick}>
      {typeof user.img === "string" && user.img !== "" ? (
        <ProfileImage src={require(`../../assets/images/${user.img}`)} />
      ) : (
        <StyledProfile>{user.img}</StyledProfile>
      )}
      <UserName>{user.name}</UserName>
    </Container>
  );
};

export default UserInfo;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0.75rem 1.25rem;
  gap: 0.75rem;
  cursor: pointer;
`;

const UserName = styled.p`
  ${({ theme }) => theme.font.Body_1_med};
  color: ${({ theme }) => theme.color.gray100};
`;

const ProfileImage = styled.img`
  height: 2.75rem;
  width: 2.75rem;
  border-radius: 50%;
`;

const StyledProfile = styled.div`
  height: 2.75rem;
  width: 2.75rem;
  border-radius: 50%;
`;

import styled from "styled-components";
import { User } from "../../stores/UserStore";
import { Profile } from "../../assets/icons";

interface UserInfoProps {
  user: User;
  onClick: () => void;
  onDoubleClick?: () => void;
  size?: "large" | "small";
}

const UserInfo: React.FC<UserInfoProps> = ({
  user,
  onClick,
  onDoubleClick,
  size = "small",
}) => {
  return (
    <Container onDoubleClick={onDoubleClick}>
      {user.img ? (
        <ProfileImage
          src={require(`../../assets/images/${user.img}`)}
          size={size}
        />
      ) : (
        <StyledProfile size={size}>
          <Profile color={user.color} />
        </StyledProfile>
      )}
      <UserName size={size} onClick={onClick}>
        {user.name}
      </UserName>
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

const UserName = styled.p<{ size: "large" | "small" }>`
  ${({ theme, size }) =>
    size === "large" ? theme.font.Headline3 : theme.font.Body_1_med};
  color: ${({ theme }) => theme.color.gray100};
  cursor: url(https://s-uxun.github.io/CDN/Rainbow.cur), pointer;
`;

const ProfileImage = styled.img<{ size: "large" | "small" }>`
  height: ${({ size }) => (size === "large" ? "3.75rem" : "2.75rem")};
  width: ${({ size }) => (size === "large" ? "3.75rem" : "2.75rem")};
  border-radius: 50%;
`;

const StyledProfile = styled.div<{ size: "large" | "small" }>`
  height: ${({ size }) => (size === "large" ? "3.75rem" : "2.75rem")};
  width: ${({ size }) => (size === "large" ? "3.75rem" : "2.75rem")};
  border-radius: 50%;
`;

import styled from "styled-components";
import { User } from "../../stores/UserStore";
import { Profile } from "../../assets/icons";

interface UpdatedProfileProps {
  updatedUsers: User[];
}

const UpdatedProfile: React.FC<UpdatedProfileProps> = ({ updatedUsers }) => {
  return (
    <Container>
      <Title>
        업데이트한 프로필 <Count>{updatedUsers.length}</Count>
      </Title>
      <Content>
        {updatedUsers.map((user) => (
          <ProfileContainer key={user.id}>
            {user.img ? (
              <ProfileImage src={require(`../../assets/images/${user.img}`)} />
            ) : (
              <StyledProfile>
                <Profile color={user.color} />
              </StyledProfile>
            )}
            <UserName>{user.name}</UserName>
          </ProfileContainer>
        ))}
      </Content>
    </Container>
  );
};

export default UpdatedProfile;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 0.75rem 0;
  border-top: 1px solid ${({ theme }) => theme.color.gray10};
  margin-top: 1rem;
`;

const Title = styled.p`
  ${({ theme }) => theme.font.Caption_med};
  color: ${({ theme }) => theme.color.gray50};
  display: flex;
  align-items: center;
  margin-left: 1.25rem;
`;

const Count = styled.span`
  ${({ theme }) => theme.font.Caption_med};
  color: ${({ theme }) => theme.color.gray30};
  margin-left: 0.5rem;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-left: 1.25rem;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 50%;
`;

const StyledProfile = styled.div`
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 50%;
`;

const UserName = styled.p`
  ${({ theme }) => theme.font.Caption_med};
  color: ${({ theme }) => theme.color.gray100};
  text-align: center;
  margin-top: 0.25rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 2.75rem;
`;

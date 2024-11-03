import styled from "styled-components";
import { useState } from "react";
import useUserStore, { User } from "../../stores/UserStore";
import { Profile, ChatLine, Insta, Right } from "../../assets/icons";

interface EditProfileContentProps {
  currentUser: User;
  isEditing: boolean;
  setIsEditing: (editing: boolean) => void;
}

const EditProfileContent: React.FC<EditProfileContentProps> = ({
  currentUser,
  isEditing,
  setIsEditing,
}) => {
  const [name, setName] = useState(currentUser.name);
  const [phoneNum, setPhoneNum] = useState(currentUser.phoneNum);
  const [birthday, setBirthday] = useState(currentUser.birthday);
  const addUpdatedUser = useUserStore((state) => state.addUpdatedUser);

  // 변경된 상태 저장하고 해당 유저를 UpdatedUser에 추가
  const handleSave = () => {
    useUserStore.setState((state) => {
      const updatedUsers = state.users.map((user) =>
        user.id === currentUser.id
          ? { ...user, name, phoneNum, birthday }
          : user
      );
      return { users: updatedUsers };
    });
    addUpdatedUser({ ...currentUser, name, phoneNum, birthday });
    setIsEditing(false);
  };

  const handleEdit = () => {
    if (isEditing) {
      handleSave(); // 편집 완료 -> 저장
    } else {
      setIsEditing(true);
    }
  };

  const handleInstaClick = () => {
    if (currentUser.instaId) {
      window.open(`https://instagram.com/${currentUser.instaId}`, "_blank");
    }
  };

  return (
    <Container>
      <ProfileWrapper>
        {currentUser.img ? (
          <ProfileImage
            src={require(`../../assets/images/${currentUser.img}`)}
          />
        ) : (
          <StyledProfile>
            <Profile color={currentUser.color} />
          </StyledProfile>
        )}
      </ProfileWrapper>
      <InputName
        value={name}
        onChange={(e) => setName(e.target.value)}
        disabled={!isEditing}
      />
      <InputBirthDay
        type="date"
        value={birthday}
        onChange={(e) => setBirthday(e.target.value)}
        disabled={!isEditing}
      />
      <InputPhoneNum
        value={phoneNum}
        onChange={(e) => setPhoneNum(e.target.value)}
        disabled={!isEditing}
      />
      <MakeChat>
        <ChatLine style={{ width: "1.5rem" }} />
        <p>나와의 채팅</p>
        <Right
          style={{ width: "1.5rem", position: "absolute", right: "1rem" }}
        />
      </MakeChat>
      <LinkInsta onClick={handleInstaClick}>
        <Insta style={{ width: "1.5rem" }} />
        <p>SNS</p>
        <Right
          style={{ width: "1.5rem", position: "absolute", right: "1rem" }}
        />
      </LinkInsta>
      <Button onClick={handleEdit}>
        {isEditing ? "편집 완료" : "프로필 편집"}
      </Button>
    </Container>
  );
};

export default EditProfileContent;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 1.25rem 13rem;
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.color.gray10},
    #ffffff
  );
  border-top: 1px solid ${({ theme }) => theme.color.gray30};
  border-radius: 1.25rem 1.25rem 0 0;
  position: relative;
`;

const ProfileWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ProfileImage = styled.img`
  width: 6.5625rem;
  height: 6.5625rem;
  border-radius: 50%;
`;

const StyledProfile = styled.div`
  width: 6.5625rem;
  height: 6.5625rem;
  border-radius: 50%;
`;

const InputName = styled.input`
  ${({ theme }) => theme.font.Headline3};
  color: ${({ theme }) => theme.color.gray100};
  border: none;
  background: none;
  text-align: center;
  margin: 3.5rem 0 0.25rem;
  height: 2rem;
`;

const InputPhoneNum = styled.input`
  ${({ theme }) => theme.font.Body_2_med};
  color: ${({ theme }) => theme.color.gray80};
  border: none;
  background: none;
  text-align: center;
  margin-bottom: 1.5rem;
`;

const InputBirthDay = styled.input`
  ${({ theme }) => theme.font.Body_2_med};
  color: ${({ theme }) => theme.color.gray80};
  border: none;
  background: none;
  text-align: center;
  margin-left: 1rem;
`;

const MakeChat = styled.div`
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem 0.75rem 1.5rem;
  border: 1px solid ${({ theme }) => theme.color.gray50};
  border-radius: 0.75rem;
  width: 100%;
  background: rgba(250, 250, 251, 0.5);
  margin-bottom: 0.75rem;
  position: relative;
  gap: 0.5rem;
  p {
    ${({ theme }) => theme.font.Body_2_med};
    color: ${({ theme }) => theme.color.gray60};
  }
`;

const LinkInsta = styled.div`
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem 0.75rem 1.5rem;
  border: 1px solid ${({ theme }) => theme.color.gray50};
  border-radius: 0.75rem;
  width: 100%;
  background: rgba(250, 250, 251, 0.5);
  position: relative;
  gap: 0.5rem;
  cursor: pointer;
  p {
    ${({ theme }) => theme.font.Body_2_med};
    color: ${({ theme }) => theme.color.gray60};
  }
  &:hover {
    background-color: ${({ theme }) => theme.color.palepink2};
  }
`;

const Button = styled.button`
  width: 5rem;
  margin-top: 1rem;
  padding: 0.25rem 0.5rem;
  ${({ theme }) => theme.font.Caption_med};
  color: ${({ theme }) => theme.color.gray50};
  border: 1px solid ${({ theme }) => theme.color.gray50};
  border-radius: 0.75rem;
  cursor: pointer;
  background: none;
  position: absolute;
  top: 0;
  right: 1.25rem;

  &:hover {
    background-color: ${({ theme }) => theme.color.palepink2};
  }
`;

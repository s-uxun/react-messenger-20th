import styled from "styled-components";
import { useState } from "react";
import useUserStore from "../../stores/UserStore";
import { Profile, ChatLine, Insta, Right } from "../../assets/icons";

const EditProfileContent = () => {
  const { currentUser } = useUserStore();
  const [isEditing, setIsEditing] = useState(false);
  const [editFields, setEditFields] = useState({
    name: currentUser?.name || "",
    phoneNum: currentUser?.phoneNum || "",
    birthday: currentUser?.birthday || "",
    instaId: currentUser?.instaId || "",
  });

  if (!currentUser) return null;

  // 프로필 정보 바꾸고 저장하기
  const handleEditToggle = () => setIsEditing(!isEditing);
  const handleChange = (field: string, value: string) => {
    setEditFields({ ...editFields, [field]: value });
  };
  const handleSave = () => {
    useUserStore.setState((state) => ({
      users: state.users.map((user) =>
        user.id === currentUser.id ? { ...user, ...editFields } : user
      ),
    }));
    setIsEditing(false);
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
        value={editFields.name}
        onChange={(e) => handleChange("name", e.target.value)}
      />
      <InputPhoneNum
        value={editFields.phoneNum}
        onChange={(e) => handleChange("phoneNum", e.target.value)}
      />
      <InputBirthDay
        type="date"
        value={editFields.birthday}
        onChange={(e) => handleChange("birthday", e.target.value)}
      />
      <MakeChat>
        <ChatLine style={{ width: "1.5rem" }} />
        <p>나와의 채팅</p>
        <Right
          style={{ width: "1.5rem", position: "absolute", right: "1rem" }}
        />
      </MakeChat>
      <LinkInsta>
        <Insta style={{ width: "1.5rem" }} />
        <p>SNS</p>
        <Right
          style={{ width: "1.5rem", position: "absolute", right: "1rem" }}
        />
      </LinkInsta>
      {/* <InputInsta
        value={editFields.instaId}
        onChange={(e) => handleChange("instaId", e.target.value)}
      /> */}
      <Button onClick={isEditing ? handleSave : handleEditToggle}>
        {isEditing ? "편집 완료" : "프로필 편집"}
      </Button>
    </Container>
  );
};

export default EditProfileContent;

// Styled Components

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 1.25rem 15rem;
  background-color: ${({ theme }) => theme.color.gray10};
  border-radius: 1.25rem 1.25rem 0 0;
  position: relative;
`;

const ProfileWrapper = styled.div`
  position: absolute;
  top: 0;
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
  margin-top: 4rem;
  height: 2rem;
`;

const InputPhoneNum = styled.input`
  ${({ theme }) => theme.font.Body_2_med};
  color: ${({ theme }) => theme.color.gray80};
  border: none;
  background: none;
  text-align: center;
`;

const InputBirthDay = styled.input`
  ${({ theme }) => theme.font.Body_2_med};
  border: 1px solid ${({ theme }) => theme.color.gray80};
  border: none;
  background: none;
  text-align: center;
`;

const InputInsta = styled.input`
  ${({ theme }) => theme.font.Body_2_reg};
  padding: 0.25rem;
  border: 1px solid ${({ theme }) => theme.color.gray30};
  border-radius: 0.5rem;
  width: 60%;
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
  p {
    ${({ theme }) => theme.font.Body_2_med};
    color: ${({ theme }) => theme.color.gray60};
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

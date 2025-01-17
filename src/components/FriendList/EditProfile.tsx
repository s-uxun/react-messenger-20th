import styled from "styled-components";
import { useState } from "react";
import { MobileTop } from "../MobileTop";
import { ChatBottom } from "../ChattingRoom/ChatBottom";
import { Close, Gift, Barcode, Setting } from "../../assets/icons";
import EditProfileContent from "./EditProfileContent";
import useUserStore from "../../stores/UserStore";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  // 그냥 { currentUser }로 불러오면 mockData의 정보만 불러와서 바뀐 상태 정보는 업데이트가 안 됨.
  const users = useUserStore((state) => state.users);
  const currentUserId = useUserStore((state) => state.currentUserId);
  const currentUser = users.find((user) => user.id === currentUserId);
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  return (
    <Wrapper>
      <MobileTop />
      <GiftTop>
        <Close
          onClick={() => navigate("/friendlist")}
          style={{ width: "1.5rem", cursor: "pointer" }}
        />
        <Right>
          <Gift style={{ width: "1.5rem", cursor: "pointer" }} />
          <Barcode style={{ width: "1.5rem", cursor: "pointer" }} />
          <Setting style={{ width: "1.5rem", cursor: "pointer" }} />
        </Right>
      </GiftTop>
      <ContentStyle></ContentStyle>
      {currentUser && (
        <EditProfileContent
          currentUser={currentUser}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        />
      )}
      <ChatBottom />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(var(--vh, 1vh) * 100);
  background-color: ${({ theme }) => theme.color.palepink1};
  background-image: url("/svg/Pattern.svg"),
    linear-gradient(to bottom, rgba(255, 255, 255, 0), #ffffff 100%);
  background-size: 107% auto;
  background-repeat: no-repeat;
`;

const ContentStyle = styled.div`
  ${({ theme }) => theme.scroll.none};
  flex-grow: 1;
  overflow-y: auto;
`;

const GiftTop = styled.div`
  display: flex;
  padding: 1rem;
  align-items: center;
  justify-content: space-between;
`;
const Right = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
`;

export default EditProfile;

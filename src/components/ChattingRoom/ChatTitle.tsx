import { Back } from "../../assets/icons";
import { Search } from "../../assets/icons";
import { Menu } from "../../assets/icons";
import { useNavigate, useParams } from "react-router-dom";
import useChatroomStore from "../../stores/ChatroomStore";
import { useTitle } from "../hooks/useTitle";
import styled from "styled-components";

export function ChatTitle() {
  const navigate = useNavigate();
  const { roomId } = useParams<{ roomId: string }>();
  const chatrooms = useChatroomStore((state) => state.chatrooms);
  const chatroom = chatrooms.find((room) => room.id === Number(roomId));
  const { getTitle } = useTitle();

  return (
    <Contianer>
      <Left>
        <Back
          style={{ width: "1.5rem", cursor: "pointer" }}
          onClick={() => navigate(-1)}
        />
        <AllNum></AllNum>
      </Left>
      <Center>
        <Title>
          {getTitle(chatroom?.title || "", chatroom?.userIds || [])}
        </Title>
        {chatroom?.userIds && chatroom.userIds.length > 2 && (
          <Num>{chatroom?.userIds.length}</Num>
        )}
      </Center>
      <Right>
        <Search style={{ width: "1.5rem", cursor: "pointer" }} />
        <Menu style={{ width: "1.5rem", cursor: "pointer" }} />
      </Right>
    </Contianer>
  );
}

const Contianer = styled.div`
  display: flex;
  padding: 0 1rem;
  align-items: center;
  justify-content: space-between;
  height: 3rem;
  background-color: white;
  flex-shrink: 0;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 0.25rem;
  width: 4rem;
`;

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 0.5rem;
`;

const Right = styled.div`
  display: flex;
  width: 4rem;
  justify-content: space-between;
`;

const AllNum = styled.p`
  ${({ theme }) => theme.font.Body_2_med};
  color: ${({ theme }) => theme.color.gray80};
  margin-right: 1.3rem;
`;

const Title = styled.p`
  ${({ theme }) => theme.font.Headline3};
  color: ${({ theme }) => theme.color.gray100};
`;

const Num = styled.p`
  ${({ theme }) => theme.font.Subhead_med};
  color: ${({ theme }) => theme.color.gray50};
`;

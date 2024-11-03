import { useEffect, useState } from "react";
import styled from "styled-components";
import { GiftCircle, Right } from "../../assets/icons";
import useUserStore from "../../stores/UserStore";

const BirthdayUser = () => {
  const users = useUserStore((state) => state.users);
  const [message, setMessage] = useState("");

  // 생일인 유저 추출 (연도 빼고 월, 일 비교)
  useEffect(() => {
    const today = `${new Date().getMonth() + 1}-${new Date().getDate()}`;
    const birthdayNames = users
      .filter((user) => {
        const [_, month, day] = user.birthday.split("-");
        return `${parseInt(month)}-${parseInt(day)}` === today;
      })
      .map((user) => user.name);

    // alert로 띄울 메세지 형식
    setMessage(
      birthdayNames.length
        ? `🎂${today.replace(
            "-",
            "월 "
          )}일🎂\n오늘 생일인 사람은 ${birthdayNames.join(
            ", "
          )}입니다.\n채팅으로 축하를 건네보세요! 🥳`
        : `🎂${today.replace("-", "월 ")}일🎂\n오늘은 생일인 사람이 없습니다.`
    );
  }, [users]);

  return (
    <Container onClick={() => alert(message)}>
      <Title>생일인 친구</Title>
      <Content>
        <GiftCircle style={{ width: "2.75rem", height: "2.75rem" }} />
        <Notice>친구의 생일을 확인해 보세요!</Notice>
        <Right
          style={{
            width: "1.5rem",
            height: "1.5ren",
            position: "absolute",
            right: "0",
          }}
        />
      </Content>
    </Container>
  );
};

export default BirthdayUser;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 0.75rem 1.25rem;
  border-top: 1px solid ${({ theme }) => theme.color.gray10};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.color.gray5};
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  position: relative;
`;

const Title = styled.p`
  ${({ theme }) => theme.font.Caption_med}
  color: ${({ theme }) => theme.color.gray50}
`;

const Notice = styled.p`
  ${({ theme }) => theme.font.Body_1_med}
  color: ${({ theme }) => theme.color.gray100}
`;

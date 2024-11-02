import styled from "styled-components";
import { GiftCircle } from "../../assets/icons";
import { Right } from "../../assets/icons";

const BirthdayUser = () => {
  return (
    <Container>
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
  margin-top: 1rem;
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

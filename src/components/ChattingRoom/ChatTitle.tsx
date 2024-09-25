import { Back } from "../../assets/icons";
import { Search } from "../../assets/icons";
import { Menu } from "../../assets/icons";

import styled from "styled-components";

export function ChatTitle() {
  return (
    <Contianer>
      <Left>
        <Back style={{ width: "1.5rem", cursor: "pointer" }} />
        <AllNum>85</AllNum>
      </Left>
      <Center>
        <Title>CEOS</Title>
        <Num>4</Num>
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
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 0.25rem;
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
  ${({ theme }) => theme.font.Body_2_med}
  color: ${({ theme }) => theme.color.gray80}
`;

const Title = styled.p`
  ${({ theme }) => theme.font.Headline3}
  color: ${({ theme }) => theme.color.gray100}
`;

const Num = styled.p`
  ${({ theme }) => theme.font.Subhead_med}
  color: ${({ theme }) => theme.color.gray50}
`;

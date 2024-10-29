import { Search } from "../../assets/icons";
import { PlusChat } from "../../assets/icons";
import { Setting } from "../../assets/icons";

import styled from "styled-components";

const ListTitle = () => {
  return (
    <Contianer>
      <Left>채팅</Left>
      <Right>
        <Search style={{ width: "1.5rem", cursor: "pointer" }} />
        <PlusChat style={{ width: "1.5rem", cursor: "pointer" }} />
        <Setting style={{ width: "1.5rem", cursor: "pointer" }} />
      </Right>
    </Contianer>
  );
};

export default ListTitle;

const Contianer = styled.div`
  display: flex;
  padding: 0.56rem 1rem 0.13rem;
  align-items: center;
  justify-content: space-between;
  height: 3rem;
  background-color: white;
  flex-shrink: 0;
  margin-bottom: 1rem;
`;

const Left = styled.p`
  ${({ theme }) => theme.font.Headline2}
  color: ${({ theme }) => theme.color.gray100}
`;

const Right = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
`;

import { ReactNode } from "react";
import styled from "styled-components";

interface ProfileGroupProps {
  participants: { id: number; img: string | ReactNode }[];
  currentUserId: number;
}

const ProfileGroup: React.FC<ProfileGroupProps> = ({
  participants,
  currentUserId,
}) => {
  const displayedParticipants = participants
    .filter((user) => user.id !== currentUserId)
    .slice(0, 4); // 최대 4명까지만

  return (
    <Container numProfiles={displayedParticipants.length}>
      {displayedParticipants.map((user) =>
        typeof user.img === "string" && user.img !== "" ? (
          <ProfileImage
            src={require(`../../assets/images/${user.img}`)}
            size={displayedParticipants.length === 1 ? "large" : "small"} //2명부터는 프로필 사이즈 작아짐
          />
        ) : (
          <StyledProfile
            size={displayedParticipants.length === 1 ? "large" : "small"}
          >
            {user.img}
          </StyledProfile>
        )
      )}
    </Container>
  );
};

export default ProfileGroup;

const Container = styled.div<{ numProfiles: number }>`
  display: grid;
  align-items: center;
  justify-content: center;

  ${({ numProfiles }) =>
    numProfiles === 1 &&
    `
    grid-template-columns: 1fr;
  `}

  ${({ numProfiles }) =>
    numProfiles === 2 &&
    `
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-template-areas: 
      "a ."
      ". b";
    
    & > :nth-child(1) {
      grid-area: a;
    }

    & > :nth-child(2) {
      grid-area: b;
    }
  `}

  ${({ numProfiles }) =>
    numProfiles === 3 &&
    `
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(2, 1fr);
    row-gap: 0;
    column-gap: 0.2rem;
    & > :nth-child(1) {
      grid-column: span 2;
      justify-self: center;
    }
  `}
  
  ${({ numProfiles }) =>
    numProfiles >= 4 &&
    `
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 0.25rem;
  `}
  width: 3rem;
  height: 3rem;
`;

const ProfileImage = styled.img<{ size: "large" | "small" }>`
  width: ${({ size }) => (size === "large" ? "2.75rem" : "1.5rem")};
  height: ${({ size }) => (size === "large" ? "2.75rem" : "1.5rem")};
  border-radius: 50%;
`;

const StyledProfile = styled.div<{
  size: "large" | "small";
}>`
  width: ${({ size }) => (size === "large" ? "2.75rem" : "1.5rem")};
  height: ${({ size }) => (size === "large" ? "2.75rem" : "1.5rem")};
  border-radius: 50%;
`;

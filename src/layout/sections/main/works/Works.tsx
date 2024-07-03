import styled from "styled-components";
import { FlexContainer } from "../../../../components/FlexContainer";
import { Card } from "../../../../components/card/Card";
import rectangle18 from "../../../../assets/images/Rectangle 18.jpg";
import rectangle16 from "../../../../assets/images/Rectangle 16.jpg";
import rectangle8 from "../../../../assets/images/Rectangle 8.jpg";
import rectangle24 from "../../../../assets/images/Rectangle 24.jpg";
import rectangle23 from "../../../../assets/images/Rectangle 23.jpg";
import rectangle22 from "../../../../assets/images/Rectangle 22.jpg";

export const Works = () => {
  return (
    <FlexContainer>
      <StyledWorks>
        <SectionTitle> Projects </SectionTitle>
        <TextWorks>Things I’ve built so far</TextWorks>

        <StyledCardBox>
          <Card
            src={rectangle18}
            title={"Project Tile goes here"}
            text={
              "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
            }
            techstack={"Tech stack : HTML , JavaScript, SASS, React"}
          />
          <Card
            src={rectangle16}
            title={"Project Tile goes here"}
            text={
              "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
            }
            techstack={"Tech stack : HTML , JavaScript, SASS, React"}
          />
          <Card
            src={rectangle8}
            title={"Project Tile goes here"}
            text={
              "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
            }
            techstack={"Tech stack : HTML , JavaScript, SASS, React"}
          />
          <Card
            src={rectangle24}
            title={"Project Tile goes here"}
            text={
              "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
            }
            techstack={"Tech stack : HTML , JavaScript, SASS, React"}
          />
          <Card
            src={rectangle23}
            title={"Project Tile goes here"}
            text={
              "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
            }
            techstack={"Tech stack : HTML , JavaScript, SASS, React"}
          />
          <Card
            src={rectangle22}
            title={"Project Tile goes here"}
            text={
              "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
            }
            techstack={"Tech stack : HTML , JavaScript, SASS, React"}
          />
        </StyledCardBox>
      </StyledWorks>
    </FlexContainer>
  );
};

const StyledWorks = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background-color: #191919;
`;

const SectionTitle = styled.h2`
  color: #cccccc;
  font-size: 48px;
  font-weight: bold;
`;

const TextWorks = styled.p`
  font-size: 32px;
  color: #a7a7a7;
`;

const StyledCardBox = styled.div`
  max-width: 1194px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 30px;
`;

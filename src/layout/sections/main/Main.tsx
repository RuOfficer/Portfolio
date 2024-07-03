import styled from "styled-components";
import photo from "../../../assets/images/Эльбрус.png";
import { FlexContainer } from "../../../components/FlexContainer";

export const Main = () => {
  return (
    <StyledMain>
      <FlexContainer align={"center"} justify={"center"} gap={"250px"}>
        <div>
          <TextFirst>Hi 👋,</TextFirst>
          <TextSecond>My name is</TextSecond>
          <Name>Konstantin S</Name>
          <Title>I build things for web</Title>
        </div>
        <Photo src={photo} alt="Foto web-delevoper" />
      </FlexContainer>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  background-color: #191919;
`;

const TextFirst = styled.div`
  font-size: 58px;
  font-weight: bold;
  color: #d9d9d9;
`;

const TextSecond = styled.div`
  font-size: 58px;
  font-weight: bold;
  color: #d9d9d9;
`;

const Name = styled.div`
  font-size: 58px;
  font-weight: bold;
  background: linear-gradient(to right, #13b0f5, #e70faa);
`;

const Title = styled.h1`
  font-size: 58px;
  font-weight: bold;
  color: #d9d9d9;
`;

const Photo = styled.img`
  width: 549px;
  height: 549px;
  object-fit: cover;
  border-radius: 50%;
`;

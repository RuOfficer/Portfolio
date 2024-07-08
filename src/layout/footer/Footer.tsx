import styled from "styled-components";
import { FlexContainer } from "../../components/FlexContainer";
import { Logo2 } from "../../components/logo/Logo2";
import { Logo } from "../../components/logo/Logo";

export const Footer = () => {
  return (
    <StyledFooter>
      <FlexContainer justify={"space-around"}>
        <Logo2 />
        <FlexContainer justify={"space-between"} gap={"30px"}>
          <StyledPhone>+7 999 040 75 43</StyledPhone>
          <StyledLinkImeail>Konstantsan@mail.ru</StyledLinkImeail>
          <Logo />
        </FlexContainer>
      </FlexContainer>
      <StyledMenu>
        <ul>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>About</a>
          </li>
          <li>
            <a href='#'>Technologies</a>
          </li>
          <li>
            <a href='#'>Projects</a>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
        </ul>
        <StyledTextAboutMe>
          Designed and built by <StyledSpan>Konstantin S</StyledSpan> with{" "}
          <StyledSpan>Love</StyledSpan> & <StyledSpan>Coffee</StyledSpan>
        </StyledTextAboutMe>
      </StyledMenu>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #191919;
`;

const StyledPhone = styled.p`
  color: #a7a7a7;
  font-size: 18px;
`;

const StyledLinkImeail = styled.p`
  color: #a7a7a7;
  font-size: 18px;
`;

const StyledTextAboutMe = styled.p`
  color: #a7a7a7;
  font-size: 18px;
`;

const StyledSpan = styled.span`
  background-color: linear-gradient(45deg, #13b0f5, #e70faa);
`;

const StyledMenu = styled.nav`
  display: flex;
  justify-content: space-around;

  ul {
    gap: 20px;
    list-style: none;
    display: flex;
    flex-direction: row;
  }

  a {
    color: #a7a7a7;
    font-size: 18px;
  }
`;

import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";
import { FlexContainer } from "../../../../components/FlexContainer";

export const Skills = () => {
  return (
    <StyledSkills>
      <TitleSkills>My Tech Stack</TitleSkills>
      <TextSkills> Technologies I’ve been working with recently</TextSkills>
      <FlexContainer
        justify={"center"}
        align={"center"}
        wrap={"wrap"}
        gap={"60px"}
      >
        <Icon iconId={"vscode-icons_html"} viewBox="0 0 120 120" />
        <Icon iconId={"vscode-icons_css"} viewBox="0 0 120 119" />
        <Icon iconId={"vscode-icons_js"} viewBox="0 0 120 120" />
        <Icon iconId={"logos_react"} viewBox="0 0 113 101" />
        <Icon iconId={"Vector1"} viewBox="0 0 105 100" />
        <Icon iconId={"logo_bootstrap"} viewBox="0 0 88 87" />
      </FlexContainer>
      <FlexContainer
        justify={"center"}
        align={"center"}
        wrap={"wrap"}
        gap={"60px"}
      >
        <Icon iconId={"vscode-icons_tailwind"} viewBox="0 0 131 131" />
        <Icon iconId={"logos_sass"} viewBox="0 0 117 87" />
        <Icon iconId={"git-icon"} viewBox="0 0 105 105" />
        <Icon iconId={"greensock"} viewBox="0 0 120 120" />
        <Icon iconId={"vscode-icons_vscode"} viewBox="0 0 112 112" />
        <Icon iconId={"Vector"} viewBox="0 0 30 30" />
      </FlexContainer>
    </StyledSkills>
  );
};

const StyledSkills = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #191919;
  gap: 40px;
`;

const TitleSkills = styled.h2`
  color: #cccccc;
  font-size: 48px;
  font-weight: bold;
`;

const TextSkills = styled.p`
  color: #a7a7a7;
  font-size: 32px;
`;

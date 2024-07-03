import styled from "styled-components";
import { Logo } from "../logo/Logo";

type CardPropsType = {
  title: string;
  text: string;
  techstack: string;
  src: string;
};

export const Card = (props: CardPropsType) => {
  return (
    <StyledCard>
      <Image src={props.src} alt="" />
      <Title>{props.title}</Title>
      <TextCard>{props.text}</TextCard>
      <TechStack>{props.techstack}</TechStack>
      <LinkBox>
        <Logo />
        <Link />
        <Logo />
        <Link />
      </LinkBox>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  max-width: 375px;
  height: 567px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #363636;
  border-radius: 20px;
`;

const Image = styled.img`
  width: 375px;
  height: 260px;
  border-radius: 20px;
`;

const Title = styled.h3`
  color: #cccccc;
`;

const TextCard = styled.p`
  color: #cccccc;
  padding: 0 20px;
`;

const TechStack = styled.p`
  color: #cccccc;
`;

const LinkBox = styled.div``;

const Link = styled.a`
  color: #ffffff;
`;

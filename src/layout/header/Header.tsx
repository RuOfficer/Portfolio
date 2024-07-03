import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import { Logo2 } from "../../components/logo/Logo2";

export const Header = () => {
  return (
    <StyledHeader>
      <Logo2 />
      <Menu />
      <Logo />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: #191919;
  display: flex;
  justify-content: space-evenly;
`;

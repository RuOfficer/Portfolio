import styled from "styled-components";

export const Testimony = () => {
  return (
    <StyledTestimony>
      <Title>For any questions please mail me:</Title>
      <Link>Konstantsan@mail.ru</Link>
    </StyledTestimony>
  );
};

const StyledTestimony = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #191919;
`;

const Title = styled.h2`
  color: #cccccc;
  font-size: 58px;
  font-weight: bold;
`;

const Link = styled.a`
  font-size: 58px;
  font-weight: bold;
  color: transperent;
  background: linear-gradient(90deg, #13b0f5, #e70faa);
`;

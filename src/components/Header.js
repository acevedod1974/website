import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background: #007bff;
  color: #fff;
  padding: 20px 0;
  text-align: center;
  border-radius: 10px 10px 0 0;

  @media (max-width: 768px) {
    padding: 10px 0;
  }
`;

const Title = styled.h1`
  margin: 0;
  font-size: 2em;

  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

const Header = ({ title }) => {
  return (
    <HeaderContainer>
      <Title>{title}</Title>
    </HeaderContainer>
  );
};

export default Header;

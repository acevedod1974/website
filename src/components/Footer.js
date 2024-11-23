import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background: #007bff;
  color: #fff;
  text-align: center;
  padding: 10px 0;
  margin-top: 20px;
  border-radius: 0 0 10px 10px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2023 Daniel Acevedo Lopez</p>
    </FooterContainer>
  );
};

export default Footer;

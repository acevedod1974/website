import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  background: #0056b3;
  color: #fff;
  padding: 10px;
  text-align: center;
  border-radius: 0 0 10px 10px;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin: 0 15px;
  padding: 10px 15px;
  border-radius: 5px;
  transition: background 0.3s;

  &:hover {
    background: #003f7f;
  }
`;

const NavBar = () => {
  return (
    <Nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/pf1">Procesos de Fabricación 1</NavLink>
      <NavLink to="/pf2">Procesos de Fabricación 2</NavLink>
    </Nav>
  );
};

export default NavBar;

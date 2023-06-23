import React from "react";
import { Link } from "react-router-dom";
import { Container, Logo, Menu, Navigation } from "./styles";
import { Button } from "../Button";

export const Header: React.FC = () => {
  return (
    <>
      <Container>
        <Navigation>
          <Link to="/">
            <Logo />
          </Link>
          <Menu>
            <Link to="/">
              <Button name="Home" />
            </Link>
            <Link to="/dashboard">
              <Button name="Dashboard" />
            </Link>
            <Link to="/customers">
              <Button name="Customers" />
            </Link>
          </Menu>
        </Navigation>
      </Container>
    </>
  );
};


import React from "react";

import { Container, Logo, Menu, Navigation } from "./styles";
import { Button } from "../Button";

export const Header: React.FC = () => {
  return (
    <>
      <Container>
        <Navigation>
          <Logo />
          <Menu>
            <Button name="Home"/>
            <Button name="Dashboard"/>
            <Button name="Customers"/>
          </Menu>
        </Navigation>
      </Container>
    </>
  );
};

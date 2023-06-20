/* eslint-disable react/no-children-prop */
/* eslint-disable no-alert */
import React from "react";

import { Container, Logo, Menu, Navigation } from "./styles";
import { Button } from "../Button";


export const Header: React.FC = () => {
  return (
    <>
      <Container>
        <Navigation>
            <Logo/>
            <Menu>
              <Button children={"home"} />
              <Button children={"dashboard"} />
              <Button children={"customers"} />
            </Menu>
        </Navigation>
      </Container>
    </>
  );
};

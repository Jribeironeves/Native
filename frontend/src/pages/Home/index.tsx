import React from "react";

import { Container, Img, BannerButton } from "./styles";

export const Home: React.FC = () => {
  return (
    <>
      <Container>
        <Img>
          <BannerButton>Reply Now</BannerButton>
        </Img>
      </Container>
    </>
  );
};

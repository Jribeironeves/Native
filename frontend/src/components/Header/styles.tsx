/* eslint-disable @typescript-eslint/no-var-requires */
import styled from "styled-components";
const logo = require("../../assets/png/logo.png");

export const Container = styled.header`
  display: flex;
  width: 97.35%;
  height: 140px;
  background: #FFF;
  position: sticky;
  top: 0;
  padding: 20px;
  z-index: 1;
`;

export const Navigation = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  margin-left: 8%;
  margin-top: 2.8%;
  /* background: green;  */
`;

export const Logo = styled.div`
  display: flex;
  margin-top: 0.2rem;
  width: 260px;
  height: 80px;
  background-image: url(${logo}) ;
  background-repeat: no-repeat;
  cursor: pointer;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  margin-left: 27.9rem;
`;
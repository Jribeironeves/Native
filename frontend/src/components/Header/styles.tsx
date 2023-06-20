/* eslint-disable @typescript-eslint/no-var-requires */
import styled from "styled-components";
const logo = require("../../assets/png/logo.png");

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  height: 140px;
  background: #FFFF;
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
  margin-left: 30rem;
`;
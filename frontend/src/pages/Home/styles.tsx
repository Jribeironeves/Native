import styled from "styled-components";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const banner = require("../../assets/png/banner.png");

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 900px;
  margin-top: 100px;
`;

export const Img = styled.div`
  display: flex;
  width: 100%;
  background-image: url(${banner});
  background-repeat: no-repeat;
`;

export const BannerButton = styled.button`
    width: 354px;
    height: 122px;
    cursor: pointer;
    margin-top: 47.5%;
    margin-left: 38.4%;
    border: #E34630 3.5px solid;
    border-radius: 10px;
    background: #EEEEEE;
    color: #E34630;
    font-size: 28px;
    font-weight: 800;
    text-transform: uppercase;
`;

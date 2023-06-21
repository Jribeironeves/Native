/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { CardContainer, CityInfo , CityName, Total, CardButton } from "./styles";

interface MuiCardProps {
  city?: string;
  total?: number;
}

export const MuiCard: React.FC<MuiCardProps> = ({
  city,
  total,
}) => {
  return (
    <>
    <CardContainer>
      <CityInfo>
        <CityName>City: {city}</CityName>
        <Total>Total: {total}</Total>
      </CityInfo>
      <CardButton>Veja mais</CardButton>
    </CardContainer>
    </>
  );
};

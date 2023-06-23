import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CardContainer, CityInfo, CityName, Total, CardButton } from "./styles";

interface MuiCardProps {
  city?: string;
  total?: number;
  id?: number;
  first_name?: string;
  last_name?: string;
  email?: string;
  gender?:  string;
  company?: string;
  title?: string;
}

export interface FirstNamesProps {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender:  string;
  company: string;
  city: string;
  title: string;
}

export const MuiCard: React.FC<MuiCardProps> = ({ city, total }) => {
  const [all, setAll] = useState<number>(0);
  const [firstNames, setFirstNames] = useState<FirstNamesProps[]>([]);
  const navigate = useNavigate();

  const navigateToNewPage = () => {
    navigate("/dashboard/customers-city", { state: { firstNames: firstNames } });
  };

  const handleButtonClick = () => {
    fetch(`http://localhost:8800/customers/${city}`)
      .then((response) => response.json())
      .then((data) => {
        setFirstNames(data);
        setAll(data.length);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    if (firstNames.length > 0) {
      navigateToNewPage();
    }
  }, [firstNames]);

  return (
    <>
      <CardContainer>
        <CityInfo>
          <CityName>City: {city}</CityName>
          <Total>Total: {total}</Total>
        </CityInfo>
        <CardButton onClick={handleButtonClick}>see more</CardButton>
      </CardContainer>
    </>
  );
};

import styled from "styled-components";

export const CardContainer = styled.div`
  width: 79%;
  height: 70px;
  margin-left:8%;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  align-items: center;
  margin-top: 2rem;

`;

export const CityInfo  = styled.div`
  flex-grow: 1;
  font-size: 22px;
  font-weight: bold;
`;
  
export const CityName = styled.h3`
  margin: 0;
`;
 
export const Total = styled.p`
  margin: 5px 0;
`;

export const CardButton = styled.button`
  background-color: #E44832;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #af5347;
  }
`;
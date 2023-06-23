import styled from "styled-components";

export const GridContainer = styled.div`
 display: flex;
  flex-direction: column;
  width: 100%;
  height: 563px;
  background: #efefef;
`;

export const Card = styled.div`
  background-color: #ffffff;
  font-size: 22px;
  width: 40%;
  height: 150px;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 1rem;

  div {
    margin-left: 1rem;
  }
`;

export const FieldContainer = styled.div`
  margin-bottom: 10px;
`;

export const FieldLabel = styled.strong`
 
`;

export const FieldValue = styled.span`

`;

export const PaginationContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

export const PaginationButton = styled.button`
  background-color: #E44832;
  color: #FFF;
  font-size: 18px;
  border: none;
  border-radius: 20px;
  padding: 5px 20px;
  margin-right: 5px;
  cursor: pointer;

  &:disabled {
    background-color: #eee;
    cursor: not-allowed;
  }
`;

export const NextButton = styled.button`
  background-color: #fff;
  color: #333;
  font-size: 16px;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
  
  &:hover {
    background-color: #f5f5f5;
  }
`;

export const Button = styled.button`
background-color: #E44832;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  margin-top: -1rem;
  margin-left: 30rem;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #af5347;
  }
`;
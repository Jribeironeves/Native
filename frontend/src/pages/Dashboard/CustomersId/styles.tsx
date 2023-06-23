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
  width: 37%;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 4rem;

  div {
    margin-left: 1rem;
  }
`;

export const StyledCard = styled(Card)<{ isEditing: boolean }>`
  height: ${props => (props.isEditing ? "380px" : "320px")};
`;

export const FieldContainer = styled.div`
  margin-bottom: 10px;
`;

export const FieldLabel = styled.strong`
  /* Estilos do rótulo */
`;

export const FieldValue = styled.span`
  /* Estilos do valor do campo */
`;

export const Input = styled.input`
 padding: 10px;
 margin-left: 1rem;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  
  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
`;

export const SaveButton = styled.button`
position: fixed;
  background-color: #E44832;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  margin-top: -0.3rem;
  margin-left: -9.5rem;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #af5347;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
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

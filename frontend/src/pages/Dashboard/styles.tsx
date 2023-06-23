import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 563px;
  background: #efefef;
`;

export const PaginationContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 3.5rem;
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
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 523px;
  background: #efefef;
`;

export const PaginationContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 5rem;
  justify-content: center;
  align-items: center;
`;

export const PaginationButton = styled.button`
  background-color: #ccc;
  border: none;
  padding: 5px 10px;
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
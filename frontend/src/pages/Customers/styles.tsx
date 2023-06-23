import styled from "styled-components";

export const Container = styled.div`
 display: flex;
  flex-direction: column;
  width: 100%;
  height: 563px;
  background: #efefef;
`;

export const CardContainer = styled.div`
  background-color: #ffffff;
  font-size: 18px;
  width: 40%;
  height: 160px;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 2rem;
  margin-left: 29%;

  div {
    /* margin-left: 1rem; */
  }
`;

export const CityInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 16px;
`;

export const Id = styled.div`
  font-weight: bold;
`;

export const FirstName = styled.div`
  font-weight: bold;
`;

export const LastName = styled.div`
  font-weight: bold;
`;

export const Email = styled.div`
  font-weight: bold;
`;

export const Gender = styled.div`
  font-weight: bold;
`;

export const Company = styled.div`
  font-weight: bold;
`;

export const City = styled.div`
  font-weight: bold;
`;

export const PaginationContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
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

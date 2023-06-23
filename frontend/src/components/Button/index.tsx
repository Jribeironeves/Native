import React from "react";

import ButtonStyled from "@material-ui/core/Button";
import styled from "styled-components";


interface ButtonProps {
  variant?: "text" | "outlined" | "contained" | undefined;
  type?: "submit" | "button" | "reset" | undefined;
  disabled?: boolean;
  onClick?: () => void;
  color?: "primary" | "secondary" | "default" | undefined;
  name?: string;
}

const StyledButton = styled(ButtonStyled)`
  width: 9.75rem;
  height: 2.5rem;
  color: #FFF !important;
  margin-left: 1.5rem !important;
  box-shadow: 1px 2px 5px #00000029;
  border-radius: 1.5rem !important;
  font-weight: bold !important;
  background: #E44832 0% 0% no-repeat padding-box !important;
  cursor: pointer;
`;

export const Button: React.FC<ButtonProps> = ({
  variant = "contained",
  color = "primary",
  type = "button",
  onClick,
  name,
  disabled = false,
}) => {
  return (
    <StyledButton
      color={color}
      variant={variant}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {name}
    </StyledButton>
  );
};

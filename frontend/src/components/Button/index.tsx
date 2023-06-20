import React from "react";

import ButtonStyled from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import styled from "styled-components";

/**
 * Botão do MaterialUI com pequenos incrementos.
 * Lista de props completa: [Button](https://mui.com/pt/components/buttons/)
 */

interface ButtonProps {
  variant?: "text" | "outlined" | "contained" | undefined;
  children: React.ReactNode;
  isLoading?: boolean;
  type?: "submit" | "button" | "reset" | undefined;
  disabled?: boolean;
  onClick?: () => void;
  color?: "primary" | "secondary" | "default" | undefined;
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
  children,
  isLoading = false,
  color = "primary",
  type = "button",
  onClick,
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
      {isLoading ? (
        <CircularProgress style={{ color: "#FFF" }} size={25} />
      ) : (
        children
      )}
    </StyledButton>
  );
};

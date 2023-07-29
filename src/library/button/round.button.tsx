import React, { ButtonHTMLAttributes } from "react";
import { styled } from "styled-components";

type ColorType = "primary" | "secondary";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ColorType;
}
const colorStyle = {
  primary: {
    backgroundColor: "var(--accent-primary)",
    color: "var(--text-contrast)",
  },
  secondary: {
    backgroundColor: "var(--action-light)",
    color: "var(--accent-primary)",
  },
};

const RoundButton = ({ variant = "primary", ...props }: Props) => {
  return <Wrapper style={colorStyle[variant]} {...props} />;
};

const Wrapper = styled.button`
  display: flex;
  padding: 12px;
  justify-content: center;
  width: 300px;
  border-radius: 33px;
  border: none;
  cursor: pointer;
  background-color: yellow;

  &:hover {
    background-color: var(--active-primary) !important;
    color: var(--text-contrast) !important;
  }
`;

export default RoundButton;

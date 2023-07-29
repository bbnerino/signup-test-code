import React, { ButtonHTMLAttributes } from "react";
import { styled } from "styled-components";

type ColorType = "primary" | "secondary";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ColorType;
}
const colorStyle = {
  primary: {
    background: "var(--accent-primary)",
    color: "var(--text-contrast)",
  },
  secondary: {
    background: "var(--action-light)",
    color: "var(--accent-primary)",
  },
};

const RoundButton = ({ variant = "primary", ...props }: Props) => {
  return <Wrapper style={colorStyle[variant]} {...props} />;
};

const Wrapper = styled.button`
  display: flex;
  padding: 12px 120px;
  border-radius: 33px;
  border: none;
  cursor: pointer;
`;

export default RoundButton;

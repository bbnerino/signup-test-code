import React, { ButtonHTMLAttributes } from "react";
import { styled } from "styled-components";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

const colorStyle = {
  primary: {
    background: "var(--action-light)",
    color: "var(--accent-primary)",
    cursor: "pointer",
  },
  disabled: {
    background: "var(--action-disabled)",
    color: "var(--text-disabled)",
    cursor: "default",
  },
};

const DuplicateButton = ({ ...props }: Props) => {
  return (
    <Wrapper
      style={colorStyle[props.disabled ? "disabled" : "primary"]}
      {...props}
    />
  );
};
const Wrapper = styled.button`
  border: 1px solid var(--border-disabled);
  text-align: center;
  width: 100px;
  height: 35px;
  border-radius: 8px;
`;
export default DuplicateButton;

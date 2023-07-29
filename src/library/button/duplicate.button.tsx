import React, { ButtonHTMLAttributes } from "react";
import { styled } from "styled-components";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

const DuplicateButton = ({ ...props }: Props) => {
  return <Wrapper>{props.children}</Wrapper>;
};
const Wrapper = styled.button`
  color: var(--text-disabled);
  text-align: center;
  border: 1px solid var(--border-disabled);
  background: var(--action-disabled);
  width: 100px;
  height: 35px;
  border-radius: 8px;
  cursor: pointer;
`;
export default DuplicateButton;

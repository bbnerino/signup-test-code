import React from "react";
import { styled } from "styled-components";

const Header = ({ title }: { title: string }) => {
  return (
    <Wrapper>
      <h5>{title}</h5>
    </Wrapper>
  );
};
const Wrapper = styled.header`
  background-color: var(--accent-primary);
  display: flex;
  height: 80px;
  padding: 10px 240px;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  h5 {
    color: var(--text-contrast, #fff);
    text-align: center;
  }
`;
export default Header;

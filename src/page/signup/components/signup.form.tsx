import React from "react";
import { styled } from "styled-components";

const SignupFormWrapper = ({ children }: { children: React.ReactNode }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.section`
  display: flex;
  width: 632px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: auto;
  h6 {
    color: var(--text-secondary);
  }
  .title {
    margin: 50px 0;
    height: 80px;
  }
  .content {
    width: 100%;
    height: 550px;
  }
`;
export default SignupFormWrapper;

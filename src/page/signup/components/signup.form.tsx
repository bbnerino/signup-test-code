import React from "react";
import { styled } from "styled-components";

const SignupForm = ({ children }: { children: React.ReactNode }) => {
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
  }
  .content {
    width: 100%;
    height: 500px;
  }
`;
export default SignupForm;

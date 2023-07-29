import React from "react";
import { styled } from "styled-components";

const SignupButtonForm = ({ children }: { children: React.ReactNode }) => {
  return <ButtonWrapper>{children}</ButtonWrapper>;
};

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;
export default SignupButtonForm;

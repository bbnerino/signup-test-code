import React, { createContext, useContext } from "react";
import { styled } from "styled-components";

// Context 생성

const WrapperContext = createContext({});

const SignupWrap = ({ children }: { children: React.ReactNode }) => {
  return (
    <WrapperContext.Provider value={{}}>
      <Wrapper>{children}</Wrapper>
    </WrapperContext.Provider>
  );
};

interface TProps {
  title?: string;
  subTitle?: string;
}

const Title = ({ title = "", subTitle }: TProps) => {
  return (
    <div className="title">
      <h5>{title}</h5>
      {subTitle && <h6>{subTitle}</h6>}
    </div>
  );
};

const Content = ({ children }: { children: React.ReactNode }) => {
  return <div className="content">{children}</div>;
};

const Footer = ({ children }: { children: React.ReactNode }) => {
  return <FooterWrapper>{children}</FooterWrapper>;
};

SignupWrap.Title = Title;
SignupWrap.Content = Content;
SignupWrap.Footer = Footer;

export default SignupWrap;

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
const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

import React from "react";
import { styled } from "styled-components";
import RoundButton from "../../../../library/button/round.button";

// Context 생성

// const WrapperContext = createContext({});

const SignupWrap = ({ children }: { children: React.ReactNode }) => {
  return (
    // <WrapperContext.Provider value={{}}>
    <Wrapper>{children}</Wrapper>
    // </WrapperContext.Provider>
  );
};

interface TProps {
  title?: string;
  subTitle?: string;
  dataTestid?: string;
}

const Title = ({ title = "", subTitle, dataTestid }: TProps) => {
  return (
    <div data-testid={`chapter-title-${dataTestid}`} className="title">
      <h5>{title}</h5>
      {subTitle && <h6>{subTitle}</h6>}
    </div>
  );
};

const Content = ({ children }: { children: React.ReactNode }) => {
  return <div className="content">{children}</div>;
};

interface FProps {
  left?: { onSubmit: () => void; title?: string };
  right: { onSubmit: () => void; title?: string };
}

const Footer = ({ left, right }: FProps) => {
  return (
    <FooterWrapper>
      {left && (
        <RoundButton
          data-testid="prev-button"
          variant="secondary"
          onClick={left.onSubmit}
        >
          {left.title || "< 이전"}
        </RoundButton>
      )}
      <RoundButton data-testid="next-button" onClick={right.onSubmit}>
        {right.title || "다음 >"}
      </RoundButton>
    </FooterWrapper>
  );
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
    height: 450px;
  }
  .error-message {
    color: var(--error-primary);
    font-size: 13px;
  }
`;
const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

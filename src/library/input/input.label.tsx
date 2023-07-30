import React, { InputHTMLAttributes, useState } from "react";
import { styled } from "styled-components";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  searchMode?: boolean;
  errorMessage?: null | string;
  children?: React.ReactNode;
  dataTestId?: string;
}

const InputLabel = ({
  errorMessage,
  children,
  searchMode = false,
  type = "text",
  dataTestId,
  ...props
}: Props) => {
  const [inputType, setInputType] = useState(type);

  const [isFocus, setIsFocus] = useState(false);

  const handleType = () => {
    inputType === "password" && setInputType("text");
    inputType === "text" && setInputType("password");
  };

  return (
    <Wrapper>
      <label>{props.title}</label>

      <Input
        className={`input_wrapper ${isFocus ? "focus" : ""}`}
        id={errorMessage ? "error-input" : ""}
      >
        {searchMode && <img src="/assets/search.png" alt="search" />}

        <input
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          data-testid={dataTestId}
          type={inputType}
          {...props}
        />

        {type === "password" && (
          <>
            {inputType === "password" && (
              <img
                src="/assets/eye-open.png"
                alt="eye-open"
                onClick={handleType}
              />
            )}
            {type === "text" && (
              <img
                src="/assets/eye-close.png"
                alt="eye-close"
                onClick={handleType}
              />
            )}
          </>
        )}

        {errorMessage && (
          <div data-testid="error-message" className="error-message">
            {errorMessage}
          </div>
        )}
      </Input>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;
  label {
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 500;
    line-height: 26px;
    margin-right: 50px;
    width: 80px;
  }
`;

const Input = styled.div`
  &.focus {
    box-shadow: 0px 0px 0px 2px rgba(0, 0, 0, 0.1);
  }
  &#error-input {
    border: 2px solid var(--error-primary);
  }
  position: relative;
  width: 450px;
  height: 20px;
  display: flex;
  padding: 8px 0px;
  border-radius: 8px;
  border: 1px solid var(--border-dark);
  margin-right: 30px;
  background: var(--background-surface, #fff);
  img {
    margin-left: 10px;
    margin-right: 2px;
    cursor: pointer;
  }
  input {
    margin: 0px 10px;
    border: none;
    width: 100%;
    &:focus {
      outline: none;
    }
  }
  .error-message {
    position: absolute;
    top: 43px;
    left: 5px;
  }
`;

export default InputLabel;

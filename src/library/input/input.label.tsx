import React, { InputHTMLAttributes, useState } from "react";
import { styled } from "styled-components";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  searchMode?: boolean;
  errorMessage?: null | string;
  children?: React.ReactNode;
}

const InputLabel = ({
  errorMessage,
  children,
  searchMode = false,
  type = "text",
  ...props
}: Props) => {
  const [inputType, setInputType] = useState(type);

  const handleType = () => {
    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
  };

  return (
    <Wrapper>
      <label>{props.title}</label>
      <div className="input_wrapper" id={errorMessage ? "error-input" : ""}>
        {searchMode && <img src="/assets/search.png" alt="search" />}

        <input type={inputType} {...props} />

        {type === "password" &&
          (inputType === "password" ? (
            <img
              src="/assets/eye-open.png"
              alt="eye-open"
              onClick={handleType}
            />
          ) : (
            <img
              src="/assets/eye-close.png"
              alt="eye-close"
              onClick={handleType}
            />
          ))}

        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </div>
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
  .input_wrapper {
    position: relative;
    width: 450px;
    display: flex;
    padding: 8px 0px;
    border-radius: 8px;
    border: 1px solid var(--border-dark);
    margin-right: 30px;
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
  }
  #error-input {
    border: 1px solid var(--error-primary);
  }
  .error-message {
    position: absolute;
    color: var(--error-primary);
    top: 50px;
  }
`;
export default InputLabel;

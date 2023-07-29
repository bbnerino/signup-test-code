import React from "react";
import { styled } from "styled-components";

interface Props {
  title: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  searchMode?: boolean;
}

const InputLabel = ({ searchMode = false, ...props }: Props) => {
  return (
    <Wrapper>
      <label>{props.title}</label>
      <div className="input_wrapper">
        {searchMode && <span>🔎</span>}
        <input
          value={props.value}
          onChange={props.onChange}
          placeholder={props.placeholder}
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  label {
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 500;
    line-height: 26px;
    margin-right: 50px;
    width: 80px;
  }
  .input_wrapper {
    width: 450px;
    display: flex;
    padding: 8px 0px;
    border-radius: 8px;
    border: 1px solid var(--border-dark);
    span {
      margin-left:10px;
      margin-right: 2px;
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
`;
export default InputLabel;

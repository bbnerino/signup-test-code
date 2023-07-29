import React from "react";
import { styled } from "styled-components";

interface Props {}

interface Props {
  name: string;
  item: any;
  setItem: React.Dispatch<React.SetStateAction<any | null>>;
  checked: (item: any) => boolean;
}

const InputRadio = ({ name, item, setItem, checked }: Props) => {
  return (
    <Wrapper onClick={() => setItem(item)}>
      <input readOnly type="radio" checked={checked(item)} />
      <label>{name}</label>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  input[type="radio"] {
    display: none;
  }
  label {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 280px;
    height: 50px;
    padding: 10px;
    margin-bottom: 30px;
    border: 2px solid var(--border-dark);
    background-color: var(--background-surface);
    border-radius: 8px;
    cursor: pointer;
  }

  input[type="radio"]:checked + label {
    border: 2px solid var(--accent-primary);
    background-color: var(--accent-background);
  }
`;

export default InputRadio;

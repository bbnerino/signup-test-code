import React from "react";
import { styled } from "styled-components";

interface Props {}

interface Props {
  name: string;
  item: any;
  setItem: (item: any) => void;
  checked: (item: any) => boolean;
}

const InputRadio = ({ name, item, setItem, checked }: Props) => {
  return (
    <Wrapper onClick={() => setItem(item)}>
      <input
        data-testid={`job-input-${item.value}`}
        readOnly
        type="radio"
        checked={checked(item)}
      />
      <label data-testid="job-label">{name}</label>
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
    &:hover {
      border: 2px solid var(--active-primary);
      transition: 0.5s;
    }
  }

  input[type="radio"]:checked + label {
    border: 2px solid var(--accent-primary);
    background-color: var(--accent-background);
  }
`;

export default InputRadio;

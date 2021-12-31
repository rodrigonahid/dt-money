import styled from "styled-components";
import { darken, transparentize } from "polished";

export const Form = styled.form`
  h2 {
    color: var(--title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background: #e7e9ee;
    font-size: 1rem;
    font-weight: 400;

    &::placeholder {
      color: var(--text);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    font-weight: 600;
    margin-top: 1.5rem;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionType = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  margin: 1rem 0;
`;

interface IRadioButton {
  isActive: boolean;
  color: string;
}

export const RadioButton = styled.button<IRadioButton>`
  height: 4rem;
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;
  background: ${({ isActive, color }) =>
    isActive ? transparentize(0.9, color) : "transparent"};

  display: flex;
  justify-content: center;
  align-items: center;
  transition: border-color 0.2s;

  &:hover {
    border-color: ${darken(0.1, "#d7d7d7")};
  }

  span {
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--title);
  }
`;

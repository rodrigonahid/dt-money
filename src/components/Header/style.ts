import styled from "styled-components";

export const Container = styled.div`
  background: var(--blue);
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem 12rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 16px;
    color: #fff;
    background-color: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;
    &:hover {
      filter: brightness(0.9);
      transition: 0.2s;
    }
  }
`;

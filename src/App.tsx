import React from "react";
import styled from "styled-components";

import { GlobalStyle } from "./styles/global";

const Container = styled.div`
  color: #333;
`;

function App() {
  return (
    <GlobalStyle>
      <Container>
        <header className="App-header">
          <p>AAAAAAAAAAAAAAAA</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </Container>
    </GlobalStyle>
  );
}

export default App;

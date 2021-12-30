import React from "react";
import styled from "styled-components";
import { Header } from "./components/Header";

import { GlobalStyle } from "./styles/global";

const Container = styled.div`
  color: #333;
`;

function App() {
  return (
    <Container>
      <Header />
      <GlobalStyle />
    </Container>
  );
}

export default App;

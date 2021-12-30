import React from "react";
import styled from "styled-components";

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

const Container = styled.div`
  color: #333;
`;

function App() {
  return (
    <Container>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </Container>
  );
}

export default App;

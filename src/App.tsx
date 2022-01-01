import React, { useState } from "react";
import styled from "styled-components";

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { GlobalStyle } from "./styles/global";
import { TransactionsProvider } from "./hooks/useTransactions";

const Container = styled.div`
  color: #333;
`;

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Container>
        <Header onOpenModal={handleOpenNewTransactionModal} />
        <Dashboard />
        <GlobalStyle />
        <NewTransactionModal
          isOpen={isNewTransactionModalOpen}
          onCloseModal={handleCloseNewTransactionModal}
        />
      </Container>
    </TransactionsProvider>
  );
}

export default App;

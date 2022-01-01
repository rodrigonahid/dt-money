import ReactModal from "react-modal";

import { Form, RadioButton, TransactionType } from "./style";
import CloseImg from "../../assets/close.svg";
import IncomeImg from "../../assets/income.svg";
import OutcomeImg from "../../assets/outcome.svg";
import { FormEvent, useState, useContext } from "react";
import { TransactionContext } from "../../TransactionsContext";

interface INewTransactionModal {
  isOpen: boolean;
  onCloseModal: () => void;
}

ReactModal.setAppElement("#root");

export function NewTransactionModal({
  isOpen,
  onCloseModal,
}: INewTransactionModal) {
  const { createTransaction } = useContext(TransactionContext);

  const [type, setType] = useState("deposit");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      type,
      title,
      amount,
      category,
      createdAt: new Date(),
    });

    setTitle("");
    setAmount(0);
    setCategory("");
    setType("");
    onCloseModal();
  }

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onCloseModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onCloseModal}
        className="react-modal-close"
      >
        <img src={CloseImg} alt="close" />
      </button>
      <Form>
        <h2>Cadastrar transação</h2>
        <input
          placeholder="Titulo"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          placeholder="Valor"
          type="number"
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
        />
        <TransactionType>
          <RadioButton
            type="button"
            isActive={type === "deposit"}
            color="#33CC95"
            onClick={() => setType("deposit")}
          >
            <img src={IncomeImg} alt="income" />
            <span>Entrada</span>
          </RadioButton>
          <RadioButton
            type="button"
            isActive={type === "withdraw"}
            color="#E52E4D"
            onClick={() => setType("withdraw")}
          >
            <img src={OutcomeImg} alt="outcome" />
            <span>Saída</span>
          </RadioButton>
        </TransactionType>
        <input
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />
        <button type="submit" onClick={handleCreateNewTransaction}>
          Cadastrar
        </button>
      </Form>
    </ReactModal>
  );
}

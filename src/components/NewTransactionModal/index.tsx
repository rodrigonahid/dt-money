import ReactModal from "react-modal";

import { Form, RadioButton, TransactionType } from "./style";
import CloseImg from "../../assets/close.svg";
import IncomeImg from "../../assets/income.svg";
import OutcomeImg from "../../assets/outcome.svg";
import { FormEvent, useState } from "react";
import { api } from "../../services/api";

interface INewTransactionModal {
  isOpen: boolean;
  onCloseModal: () => void;
}

ReactModal.setAppElement("#root");

export function NewTransactionModal({
  isOpen,
  onCloseModal,
}: INewTransactionModal) {
  const [type, setType] = useState("deposit");
  const [title, setTitle] = useState("");
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState("");

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    const data = {
      type,
      title,
      value,
      category,
    };
    api.post("transactions", data);
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
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
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

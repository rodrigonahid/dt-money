import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";

interface ITransaction {
  id: number;
  title: string;
  amount: number;
  category: string;
  type: string;
  createdAt: string;
}

interface ITransactionProvider {
  children: ReactNode;
}

interface CreateTransactionType {
  title: string;
  amount: number;
  category: string;
  type: string;
  createdAt: Date;
}

interface TransactionContextData {
  transaction: ITransaction[];
  createTransaction: (transaction: CreateTransactionType) => Promise<void>;
}

export const TransactionContext = createContext<TransactionContextData>(
  {} as TransactionContextData
);

export function TransactionsProvider({ children }: ITransactionProvider) {
  const [transaction, setTransaction] = useState<ITransaction[]>([]);

  useEffect(() => {
    api
      .get("transactions")
      .then((res) => setTransaction(res.data.transactions));
  }, []);

  async function createTransaction(transactionInput: CreateTransactionType) {
    const response = await api.post("transactions", transactionInput);
    const { transaction: resTransaction } = response.data;

    setTransaction([...transaction, resTransaction]);
  }

  return (
    <TransactionContext.Provider value={{ transaction, createTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
}

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

type CreateTransactionType = Pick<
  ITransaction,
  "title" | "amount" | "category" | "type"
>;

interface TransactionContextData {
  transaction: ITransaction[];
  createTransaction: (transaction: CreateTransactionType) => void;
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

  function createTransaction(transaction: CreateTransactionType) {
    api.post("transactions", transaction);
  }

  return (
    <TransactionContext.Provider value={{ transaction, createTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
}

import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./style";

interface ITransaction {
  id: number;
  title: string;
  amount: number;
  category: string;
  type: string;
  createdAt: string;
}

export function TransactionsTable() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    api
      .get("transactions")
      .then((res) => setTransactions(res.data.transactions));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction: ITransaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>
                {new Intl.DateTimeFormat("pt-BR").format(
                  new Date(transaction.createdAt)
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}

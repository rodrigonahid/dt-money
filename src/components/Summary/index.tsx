import { Container } from "./style";
import Income from "../../assets/income.svg";
import Outcome from "../../assets/outcome.svg";
import Total from "../../assets/total.svg";
import { useTransactions } from "../../hooks/useTransactions";

export function Summary() {
  const { transaction } = useTransactions();

  const formatNumber = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const summary = transaction.reduce(
    (acc, item) => {
      if (item.type === "deposit") {
        acc.deposit += item.amount;
        acc.total += item.amount;
      } else if (item.type === "withdraw") {
        acc.withdraw += item.amount;
        acc.total -= item.amount;
      }
      return acc;
    },
    {
      deposit: 0,
      withdraw: 0,
      total: 0,
    }
  );

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={Income} alt="income" />
        </header>
        <strong>{formatNumber.format(summary.deposit)}</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={Outcome} alt="outcome" />
        </header>
        <strong>{formatNumber.format(summary.withdraw)}</strong>
      </div>
      <div>
        <header>
          <p>Total</p>
          <img src={Total} alt="total" />
        </header>
        <strong>{formatNumber.format(summary.total)}</strong>
      </div>
    </Container>
  );
}

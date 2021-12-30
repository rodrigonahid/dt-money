import { Container } from "./style";
import Income from "../../assets/income.svg";
import Outcome from "../../assets/outcome.svg";
import Total from "../../assets/total.svg";

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={Income} alt="income" />
        </header>
        <strong>R$1.000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={Outcome} alt="outcome" />
        </header>
        <strong>R$1.000,00</strong>
      </div>
      <div>
        <header>
          <p>Total</p>
          <img src={Total} alt="total" />
        </header>
        <strong>R$1.000,00</strong>
      </div>
    </Container>
  );
}

import { Container, Content } from "./style";

import Logo from "../../assets/logo.svg";

export function Header() {
  return (
    <Container>
      <Content>
        <img src={Logo} width="172" height="40" alt="logo" />
        <button type="button">Nova transação</button>
      </Content>
    </Container>
  );
}

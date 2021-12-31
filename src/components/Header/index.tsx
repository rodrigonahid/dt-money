import { Container, Content } from "./style";

import Logo from "../../assets/logo.svg";

interface IHeader {
  onOpenModal: () => void;
}

export function Header({ onOpenModal }: IHeader) {
  return (
    <Container>
      <Content>
        <img src={Logo} width="172" height="40" alt="logo" />
        <button type="button" onClick={onOpenModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}

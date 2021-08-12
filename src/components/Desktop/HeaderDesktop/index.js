import React from "react";

import {
  Container,
  LogMarca,
  LeftNav,
  ComprarButtom,
  VenderButtom,
  AvatarButtom,
  Header,
} from "./styles";

function HeaderDesktop() {
  return (
    <Header>
      <Container>
        <LogMarca>DIVULGARCAR</LogMarca>

        <LeftNav>
          <ComprarButtom>Comprar</ComprarButtom>

          <VenderButtom>Vender</VenderButtom>

          <AvatarButtom>Login | Criar Conta</AvatarButtom>
        </LeftNav>
      </Container>
    </Header>
  );
}

export default HeaderDesktop;

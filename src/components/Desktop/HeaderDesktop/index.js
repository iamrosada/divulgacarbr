import React from "react";
import { Link } from "react-router-dom";
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
        <Link to="/">
          <LogMarca>DIVULGARCAR</LogMarca>
        </Link>

        <LeftNav>
          <Link to="/mecanic">
            <VenderButtom>Mecânico</VenderButtom>
          </Link>
          <Link to="/mercado">
            <ComprarButtom>Comprar</ComprarButtom>
          </Link>
          <VenderButtom>Vender</VenderButtom>

          <AvatarButtom>Login | Criar Conta</AvatarButtom>
        </LeftNav>
      </Container>
    </Header>
  );
}

export default HeaderDesktop;

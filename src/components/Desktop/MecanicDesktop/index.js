import React from "react";
import FotosMecanicos from "./FotosMecanicos";
import PrecoMecanico from "./PrecoMecanico";
import SobreMecanico from "./SobreMecanico";

import {
  Container,
  HeaderContent,
  Content,
  ButtonMostrarTelefon,
  DeixeUmPedido,
  ContentInferior,
  FotoAvatar,
  ContentNomeDoCentro,
  NomeDoCentro,
  SloganDoStand,
  HeaderInfor,
  ButtonFoto,
  ButtonAvaliacoes,
  ButtonPreco,
  ButtonSobreNos,
  ButtonContactos,
  ContainerBackgroun,
} from "./styles";

function MecanicDesktop() {
  return (
    <Container>
      <ContainerBackgroun>
        <HeaderContent>
          <Content>
            <ButtonMostrarTelefon>
              +7 495 960- × -Mostrar número de telefone
            </ButtonMostrarTelefon>
            <DeixeUmPedido>Deixe um pedido de serviço</DeixeUmPedido>
          </Content>

          <ContentInferior>
            <FotoAvatar src="https://images.unsplash.com/photo-1473643068424-cd2485e1ae3b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80" />

            <ContentNomeDoCentro>
              <NomeDoCentro>Unlim Boost</NomeDoCentro>
              <SloganDoStand>Centro técnico e ajuste automático</SloganDoStand>
            </ContentNomeDoCentro>
          </ContentInferior>
        </HeaderContent>
        <HeaderInfor>
          <ButtonFoto>foto</ButtonFoto>
          <ButtonAvaliacoes>Avaliações</ButtonAvaliacoes>
          <ButtonPreco>Preços</ButtonPreco>
          <ButtonSobreNos>Sobre nós</ButtonSobreNos>
          <ButtonContactos>Contatos</ButtonContactos>
        </HeaderInfor>
      </ContainerBackgroun>

      <FotosMecanicos />
      <PrecoMecanico />
      <SobreMecanico />
    </Container>
  );
}

export default MecanicDesktop;

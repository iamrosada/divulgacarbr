import React from "react";

import {
  FotoDaEquipa,
  SobreAequipa,
  Container,
  TudoSobreMecanicos,
  SobreosMecanicos,
} from "./styles";

function SobreMecanico() {
  return (
    <Container>
      <SobreosMecanicos>Sobre nós</SobreosMecanicos>
      <hr />
      <TudoSobreMecanicos>
        <SobreAequipa>
          💻 Aumento de potência programável e reparo do carro. <br />{" "}
          Reprogramação da ECU do motor para qualquer tarefa do cliente.
          <br /> <br />
          <br />
          Fazemos medições e diagnósticos gratuitos de carros.
          <br />
          <br />
          <br />
          - Desativação do software do sistema EGR
          <br />
          - Desativação do software do filtro de partículas
          <br />
          - Desativação do software dos flaps de turbulência
          <br />
          - Desativação do controle do catalisador (Euro2)
          <br />
          - Pops & Bangs, também denominado "lumbago"
          <br />
          - Desativação do limitador de velocidade
          <br />
          - Mudança de corte -desligar as revoluções
          <br />
          <br />
          <br />
          Garantia de firmware📝
          <br />
          <br />
          <br />
          Remoção física do filtro de partículas do veículo. Remoção física do
          catalisador.
          <br />
          <br />
          <br />
          Também realizamos trabalhos de: 🛠 Manutenção do carro, desde a troca
          do óleo até a revisão do motor. Suspensão, sistema de freio, reparo do
          sistema de combustível, transmissão automática e reparo da caixa de
          câmbio.
        </SobreAequipa>
        <FotoDaEquipa src="https://images.unsplash.com/photo-1570733577524-3a047079e80d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVyY2VkZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
      </TudoSobreMecanicos>
    </Container>
  );
}

export default SobreMecanico;

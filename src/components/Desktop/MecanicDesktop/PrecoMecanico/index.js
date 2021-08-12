import React from "react";

import { Container, PrecodosMecanicos, PrecoApagarMecanicos } from "./styles";

function PrecoMecanico() {
  return (
    <Container>
      <PrecodosMecanicos>Preços</PrecodosMecanicos>
      <hr />
      <PrecoApagarMecanicos>
        <tr className="table_de_preco">
          <td>Aumento de potência do software</td>
          <td> Manutenção do carro</td>
          <td>Mudança de óleo de transmissão automática</td>
          <td>Desativar controle de catalisador Euro2</td>
          <td>Remoção física do filtro de partículas</td>
          <td>Reparação de uma cremalheira de direção</td>
          <td>Chip tuning transmissão automática</td>
          <td>Substituição da corrente de sincronização</td>
          <td>Desativação do software de filtro de partículas diesel</td>
          <td>Revisão de motor</td>
        </tr>

        <tr className="table_de_preco">
          <td>18 000 ₽</td>
          <td>1 800 ₽</td>
          <td>2 500 ₽</td>
          <td>5 000 ₽</td>
          <td>5 000 ₽</td>
          <td>12 000 ₽</td>
          <td>16 000 ₽</td>
          <td>5 000 ₽</td>
          <td>5 000 ₽</td>
          <td>40 000 ₽</td>
        </tr>
      </PrecoApagarMecanicos>
    </Container>
  );
}

export default PrecoMecanico;

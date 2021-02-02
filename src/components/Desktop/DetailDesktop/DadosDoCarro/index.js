import React from 'react';

import { 
  Container,
  ColumnRight,
  ColumnLeft,
  AvatarVendedor,
  Header,
  DadosDoPerfil,
  NomeDoVendidor,
  About,
  LocalizacaoDoPropriet,
  ButtonSeInscrever,
  ButtonMensagem,
  AvaliacaoDoProprietario,
  Dados,
  DadosDoPassaporte
} from './styles';

function DadosDoCarro() {
  return (
     <Container>

          <Header>

            <ColumnLeft>
              <AvatarVendedor src="https://images.unsplash.com/photo-1576289668060-47fd82c89bb6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"/>
              <DadosDoPerfil>
                <NomeDoVendidor>
                  Rosada
                </NomeDoVendidor>
                <About>

                </About>
                <LocalizacaoDoPropriet>
                  Moscovo , Russia
                </LocalizacaoDoPropriet>
              </DadosDoPerfil>
            
            </ColumnLeft>
           

            <ColumnRight>
              <ButtonSeInscrever>
                Se Inscrever
              </ButtonSeInscrever>
              <ButtonMensagem>
                mensagem
              </ButtonMensagem>

            </ColumnRight>


          </Header>

          <AvaliacaoDoProprietario>
            <Dados>
            Avaliação do proprietário

            </Dados>
            <p>

            No meio da crise, tivemos que comprá-la às pressas para que ela não fosse para a Europa. Felizmente, o carro do meu amigo, que o usou com muito cuidado. Por 10 anos, atingindo apenas 32.000 km.
            <br/>
            Infelizmente, o longo tempo de inatividade do Lambo não foi benéfico. "Bolyachek" teve que ser muito tratado. É bom que um revendedor oficial da Lamborghini os entenda, e o custo é quase mais barato do que em um serviço especial.
             <br/>
             Resumindo, Gallardo é um Audi desenhado pela Lamborghini ... Porém, é o melhor, porque você pode ir à Europa com ele e não ter medo de quebras.
            </p>


                              

          </AvaliacaoDoProprietario>
          <DadosDoPassaporte>
            <Dados>
            Dados do passaporte
            </Dados>
           <ul>
              <li>Motor 5.0 a gasolina (500 cv)</li>    
              <li>Transmissão robótica</li> 
              <li>Tração nas quatro rodas</li> 
              <li> Máquina feita em 2004, adquirida em 2014</li> 
              <li>Lamborghini Gallardo em produção desde 2003</li> 
           </ul>

          </DadosDoPassaporte>

     </Container>

  );
}
export default DadosDoCarro;
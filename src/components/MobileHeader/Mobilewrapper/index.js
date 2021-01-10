import React from 'react';

 import 
 { 
  Wrapper,
  Procura,
  OqueProcura,
  MarcaSelect,
  ModeloSelect,
  SubModeloSelect,
  Preco,
  De,
  Ate,
  AnoDeRegisto,
  PrecoTitle,
  DeAteColumn,
  Quilometros,
  QuilometroColumn,
  Combustivel,
  SelectPosiblidadeFin,
  IconSelec,
  AnunciosButton,
  PesquisaAvancada,
  IconPesquisa
} from './styles';

function Mobilewrapper() {
  return (
    <Wrapper>
      <Procura>
        <OqueProcura>
          O que procura?
        </OqueProcura>
        <MarcaSelect placeholder="Marca"/>
        <ModeloSelect placeholder="Modelo"/>
        <SubModeloSelect placeholder="Sub-modelo"/>
      </Procura>
      <Preco>
        <PrecoTitle>
          Preço
        </PrecoTitle>
        
        <DeAteColumn>
          <De placeholder="De"/>
          <Ate placeholder="Até"/>
        </DeAteColumn>
        
      </Preco>
      <AnoDeRegisto>
        <PrecoTitle>
          Ano de Registo
        </PrecoTitle>
        
        <DeAteColumn>
          <De placeholder="De"/>
          <Ate placeholder="Até"/>
        </DeAteColumn>
      </AnoDeRegisto>
      

   
      <Quilometros>

          <QuilometroColumn>
              <PrecoTitle>
              Quilómetros
            </PrecoTitle>
            
            <DeAteColumn>
              <De placeholder="De"/>
              <Ate placeholder="Até"/>
            </DeAteColumn>
          </QuilometroColumn>
          <Combustivel placeholder="Combustível"/>
          
         <SelectPosiblidadeFin>
            <IconSelec/>
            Possibilidade de financiamento
          </SelectPosiblidadeFin>

          <AnunciosButton>
            Ver 46 722 Anúncios 
          </AnunciosButton>

          <PesquisaAvancada>
            <IconPesquisa/>
            Pesquisa avançada
          </PesquisaAvancada>  
      </Quilometros>
      
    </Wrapper>



  );
}

export default Mobilewrapper;
import React from 'react'

import {Container,LogName,LeftNav} from './styles'


export default function Navbar(){
  return(

    <Container>
      <LogName>
        Divulgacar
      </LogName>
      <LeftNav>
        <span>
          Artigo e Dicas
        </span>
        <span>
          Plano
          <img src="" alt="plano"/>
        </span>
        <span>
          Favoritos
          <img src="" alt="star"/>
        </span>
         <span>
           <img src="" alt="login"/>
           Login| Criar Conta

         </span>
         <button>
           <img src="" alt="plus"/>
            <span>Vender Veiculo</span>
         </button>




      </LeftNav>

     
    </Container>





  );

}
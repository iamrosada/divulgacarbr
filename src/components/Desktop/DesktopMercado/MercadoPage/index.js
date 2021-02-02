import React from 'react';

 import 
{ Container ,
  ContainerLeft ,
  ContainerInput ,
  ContainerGeral,
  Categoria,
  Input ,
  ContainerRight ,
  AdicionarAnuncio ,
  ButtonAdicionar ,
  ContainerAnuncioGratis ,
  Titulo,
  FotoIlustrativa,
  Paragrafo ,
  ContainerFilho

} from './styles';

function MercadoPage() {
  return (


    <Container>
      <ContainerLeft>
        <ContainerInput>
        <Input placeholder="Pesquisar todos os anúncios"/> 
        </ContainerInput>

       

        <ContainerGeral>
          {categorias.map(categoria=>
            
            <ContainerFilho key={categoria.id}>
            <Categoria>
                {categoria.titule}
            </Categoria>
              <ul>
                <li>{categoria.subcatego}</li>
                    
              </ul>
            </ContainerFilho>
            
            
            
            )}

           
           
            
            
        </ContainerGeral>

      </ContainerLeft>

      
      
      <ContainerRight>
        <AdicionarAnuncio>
          <ButtonAdicionar>
            Para adicionar um anúncio

          </ButtonAdicionar>

        </AdicionarAnuncio>
        <ContainerAnuncioGratis>
          <Titulo>
          Anúncios grátis

          </Titulo>
          <FotoIlustrativa src="https://images.unsplash.com/photo-1550855909-af303dd67c64?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTN8fGNhcnJvc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>

         
          <Paragrafo>
          Compre peças e peças necessárias de pessoas boas, venda as suas. Você pode postar seu anúncio gratuitamente.

Não se esqueça de ler as Regras de Hospedagem .

          </Paragrafo>


        </ContainerAnuncioGratis>

      </ContainerRight>





    </Container>
  );
}

const categorias =[
{ id:"1",
  titule:"Áudio e multimídia automotivos",
  subcatego:[
    ' agua ',

    ' rosada ',
    ' acustica ',
    'cameras'

  ]
  
},

{ id:"2",
  titule:"Luz automática",
  subcatego:[
    ' agua ',
    ' rosada ',
    ' acustica ',
    ' cameras ',
    ' Luzes ',
     ' diurnas ',
      ' Lâmpadas ',
     ' Luzes de nevoeiro ',
      ' Faróis Lanternas',

  ]
  
},

{ id:"3",
  titule:"Acessórios",
  subcatego:[
    ' agua ',
    ' rosada ',
    ' acustica ',
    ' cameras '

  ]
  
},
{ id:"4",
  titule:"Aparelhos",
  subcatego:[
    ' agua ',
    ' rosada ',
    ' acustica ',
    ' cameras '

  ]
  
},
{ id:"5",
  titule:"Motor e sistema de escapamento",
  subcatego:[
    ' agua ',
    ' rosada ',
    ' acustica ',
    ' cameras '

  ]
  
},
{ id:"6",
  titule:"Ferramentas",
  subcatego:[
    ' agua ',
    ' rosada ',
    ' acustica ',
    ' cameras '

  ]
  
},

]
export default MercadoPage;
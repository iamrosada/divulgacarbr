import React from 'react';

import
{ 
Container,
ImagemOportu,
OportunidadeDoDia,
Marca,
Caracteristicas,
ValorDoCarro,
Moeda

} from './styles';

const Fotos =[
  { id:"1",
    image:"https://images.unsplash.com/photo-1564694202149-86082093bcd6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjd8fGNhcnJvc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
 
  }
 
 
 
 
  ]
function MobileOportun() {
  return (

        <Container>
        
          <ImagemOportu />
          <OportunidadeDoDia>
            Oportunidade do dia
          </OportunidadeDoDia>

          <Marca>
            Mercedes-Bez A 169 AMG Line
          </Marca>
          <Caracteristicas>
            <li>2020</li>
            <li>3 549 km</li>
            <li>Gasolina</li>
            <li>Janeiro</li>
            <li>109 cv</li>
          </Caracteristicas>
          <ValorDoCarro>
            28 990 
            <Moeda>
             EUR
            </Moeda>
          </ValorDoCarro>


         


        </Container>

  );
}
export default MobileOportun;
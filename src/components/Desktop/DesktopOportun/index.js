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


 
  
 
 
 
 
function DesktopOportun() {
  return (

        <Container>
        

          <ImagemOportu src="https://images.unsplash.com/photo-1576289668060-47fd82c89bb6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"/>
          <OportunidadeDoDia>
            Oportunidade do dia
          </OportunidadeDoDia>

          <Marca>
            Mercedes-Bez A 169 AMG Line
          </Marca>
          <Caracteristicas>
            <li>2020</li>
             .
            <li>3549</li>
            <li>km</li>
            .
            <li>Gasolina</li>
            .
            <li>Janeiro</li>
            .
            <li>109</li>
            <li>cv</li>
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
export default DesktopOportun;
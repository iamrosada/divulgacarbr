import React from 'react';

 import { Container,Content, IconImage } from './styles';
 import carro  from '../../../styles/Icons/carro.svg'
function MobileMenu() {
  return(  
        <Container>
          <Content>
              <ul className="active">
                <li  >
                  <IconImage src={carro}/>
                  <span>CARROS</span>
                </li>
              </ul>
              <ul>
                <li >
                  <IconImage src={carro}/>
                  <span>CARROS</span>
                </li>
              </ul>
              <ul>
                <li>
                  <IconImage src={carro}/>
                  <span>CARROS</span>
                </li>
              </ul>
              <ul>
                <li >
                  <IconImage src={carro}/>
                  <span>CARROS</span>
                </li>
              </ul>
              <ul>
                <li >
                  <IconImage src={carro}/>
                  <span>CARROS</span>
                </li>
              </ul>
              
              
              


            </Content>


        </Container>
                

  );
}

export default MobileMenu;
import React from 'react';

 import { Content, IconImage } from './styles';
 import carro  from '../../../styles/Icons/carro.svg'
function MobileMenu() {
  return(  
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


  );
}

export default MobileMenu;
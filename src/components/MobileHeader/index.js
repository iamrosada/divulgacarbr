import React from 'react';
import MobileMenu from './MobileMenu/index';


import { Container, MenuIcon ,LogotoTipo,FiPlusIcon,Header} from './styles';

function MobileHeader() {
  return (
    <Header>
          <Container>
            <button>
              <MenuIcon/>
            </button>
            
            <LogotoTipo>
              Divulgacar
            </LogotoTipo>
            
              <button id="vender">
                <FiPlusIcon/>
                 Vender Veiculo
              </button>
          


          </Container>
          <MobileMenu/>
         
      </Header>

  );
}

export default MobileHeader;
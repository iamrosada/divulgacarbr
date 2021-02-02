import React from 'react';
import MobileDestaque from '../MobileHeader/MobileDestaque';
import MobileProduct from '../MobileHeader/MobileProduct';
import DesktopMercado from './DesktopMercado';
import DesktopOportun from './DesktopOportun';


import RightColumn from './RightColumn';

 import { Container ,DesktopContainer} from './styles';

function Desktop() {
  return (
    <>
    <DesktopContainer>
           <Container>
          <RightColumn/>
        
          <DesktopOportun/>
        
        </Container>

        <MobileDestaque/>

        <MobileProduct/>
        <MobileDestaque/>
      
      <DesktopMercado/>
    </DesktopContainer>
   
     </>   
        

  );
}

export default Desktop;
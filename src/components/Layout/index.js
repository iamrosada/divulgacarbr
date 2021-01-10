import React from 'react';
import MobileHeader from '../MobileHeader'

import LeftColumn from '../LeftColumn/index';
import RightColumn from '../RightColumn/index';
import {Container} from './styles'
import Mobilewrapper from '../MobileHeader/Mobilewrapper';
import MobileOportun from '../MobileHeader/MobileOportun/index';


function Layout() {
  return (
        <Container>
          <MobileHeader/>
          <Mobilewrapper/>
        {/*<MobileOportun/> */} 
         
          <main>
            <RightColumn/>
            <LeftColumn/>

          </main>

        </Container>

  )
}

export default Layout;
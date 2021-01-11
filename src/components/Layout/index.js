import React from 'react';
import MobileHeader from '../MobileHeader'

import LeftColumn from '../LeftColumn/index';
import RightColumn from '../RightColumn/index';
import {ContentHeaderMobile,Container}from './styles'
import Mobilewrapper from '../MobileHeader/Mobilewrapper';
import MobileOportun from '../MobileHeader/MobileOportun/index';
import MobileDestaque from '../MobileHeader/MobileDestaque';
import MobileProduct from '../MobileHeader/MobileProduct';


function Layout() {
  return (
        <Container>

        <ContentHeaderMobile>
            <MobileHeader/>
            <Mobilewrapper/>
            <MobileOportun/>
            <MobileDestaque/>
            <MobileProduct/>

        </ContentHeaderMobile>
           

       
          
        {/*<MobileOportun/> */} 
         
          <main>
            <RightColumn/>
            <LeftColumn/>

          </main>

        </Container>

  )
}

export default Layout;
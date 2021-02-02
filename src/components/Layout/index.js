import React from 'react';
import MobileHeader from '../MobileHeader'


import {ContentHeaderMobile,Container,Main}from './styles'
import Mobilewrapper from '../MobileHeader/Mobilewrapper';
import MobileOportun from '../MobileHeader/MobileOportun/index';
import MobileDestaque from '../MobileHeader/MobileDestaque';
import MobileProduct from '../MobileHeader/MobileProduct';
//import MobileCountProficionalButton from '../MobileHeader/MobileCountProficionalButton';
import HeaderDesktop from '../Desktop/HeaderDesktop';
import Desktop from '../Desktop/index';


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
           

         
          <Main>
          <HeaderDesktop/>
         <Desktop/>
            
          </Main>

        </Container>

  )
}

export default Layout;
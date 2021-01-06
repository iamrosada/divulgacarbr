import React from 'react'
import GlobalStyle from './styles/global'
import {BrowserRouter, Route} from 'react-router-dom'

import Routes from './routes'

function App() {
  return (
   
     <BrowserRouter>
      <Routes/>
      
      <GlobalStyle/>
     </BrowserRouter>
     
  );
}

export default App;

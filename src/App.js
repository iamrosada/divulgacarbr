import React from 'react'
import GlobalStyle from './styles/global'
import {BrowserRouter, Route} from 'react-router-dom'

import Routes from './routes'
import Layout from './components/Layout/index';

function App() {
  return (
   
     <BrowserRouter>
     <Layout/>


      <Routes/>
      
      <GlobalStyle/>
     </BrowserRouter>
     
  );
}

export default App;

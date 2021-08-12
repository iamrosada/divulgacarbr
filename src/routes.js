import React from "react";
import { Switch, Route } from "react-router-dom";
import MercadoPage from "./components/Desktop/DesktopMercado/MercadoPage";
import DetailDesktop from "./components/Desktop/DetailDesktop/index";
import MecanicDesktop from "./components/Desktop/MecanicDesktop";
import Layout from "./components/Layout";

//import Cart from './components/Cart/index'
//import Home from './components/Home/index'
export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Layout} />
      <Route path="/detail" component={DetailDesktop} />
      <Route path="/mecanic" component={MecanicDesktop} />
      <Route path="/mercado" component={MercadoPage} />
    </Switch>
  );
}

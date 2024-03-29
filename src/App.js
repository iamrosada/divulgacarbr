import React from "react";
import GlobalStyle from "./styles/global";
import { BrowserRouter, Route } from "react-router-dom";

import Routes from "./routes";

import HeaderDesktop from "./components/Desktop/HeaderDesktop";
import DesktopCountProficionalButton from "./components/Desktop/DesktopCountProficionalButton";

function App() {
  return (
    <BrowserRouter>
      <HeaderDesktop />

      <Routes />
      <GlobalStyle />
      <DesktopCountProficionalButton />
    </BrowserRouter>
  );
}

export default App;

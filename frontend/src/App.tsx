import React from "react";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/global";
import { Header } from "./components/Header";
import { Routa } from "./routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routa />
      </BrowserRouter>
    </>
  );
}

export default App;

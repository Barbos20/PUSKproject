import React from "react";
import styled from "styled-components";
import { Head } from "./1Head/head";
import { FirstPage } from "./2FirstPage/firstPage";
import { Pusk } from "./3Pusk/pusk";
import { Invest } from "./4Invest/invest";
import { DontFind } from "./5DontFind/dontFind";

function App() {
  const Container = styled.div`
    background: #000000;
    padding-left: 112px;
    padding-right: 112px;
  `;
  const Img = styled.img`
  position:fixed;
  `

  return (
    <Container className="App">
    {/* здесь должнаа быть фоновая картинка */}
      <Head />
      <FirstPage />
      <Pusk/>
      <Invest/>
      <DontFind/>
    </Container>
  );
}

export default App;

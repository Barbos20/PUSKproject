import React from "react";
import styled from "styled-components";
import { Head } from "./1Head/head";
import { FirstPage } from "./2FirstPage/firstPage";
import { Pusk } from "./3Pusk/pusk";
import { Invest } from "./4Invest/invest";
import { DontFind } from "./5DontFind/dontFind";
import { MakeWallet } from "./6MakeWallet/makeWallet";
import { Plugins } from "./7Plagins/plugins";
import { Form } from "./8Form/form";

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
      <MakeWallet/>
      <Plugins/>
      <Form/>
    </Container>
  );
}

export default App;

import React from "react";
import logo from "./utils/logo.png";
import { Header, Img, Nav } from "./style";

export const Head = () => {
  return (
    <Header>
      <Img src={logo} />
      <Nav>
        <p>Вакансии</p>
        <p>Контакты</p>
      </Nav>
    </Header>
  );
};

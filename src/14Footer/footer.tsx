import React from "react";
import styled from "styled-components";
import { TextInfo } from "../13Contacts/style";
import logo from "./utils/logo.png";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 260px;
`;
export const ContainerFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 80px;
  margin-bottom: 40px;
  width: 1000px;
`;

export const Line = styled.div`
  border: 2px solid #40ffe4;
  border-bottom: none;
  border-left: none;
  border-right: none;
  width: 100vw;
`;
export const Img = styled.img`
  width: 110px;
  height: 26px;
`;
export const FirstBlock = styled.div`
  display: flex;
`;

export const SecondBlock = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  justify-content: space-between;
`;
export const References = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 123px;
  margin-top: -10px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 29px;
  color: #ffffff;
`;

export const Footer = () => {
  return (
    <Container>
      <Line />
      <ContainerFooter>
        <FirstBlock>
          <Img src={logo} />
          <References>
            <a>О продукте </a>
            <a>Плагины </a>
            <a>Команда </a>
            <a>Дорожная карта </a>
          </References>
          <References>
            <a>Вакансии</a>
            <a>Контакты</a>
          </References>
        </FirstBlock>
        <SecondBlock>
          <div>
            <TextInfo>ООО "Pusk"</TextInfo>
            <TextInfo>Беларусь, г.Брест, ....</TextInfo>
            <TextInfo>wesupportyou@pusk.by</TextInfo>
          </div>
          <div>
            <TextInfo>Соглашение о конфиденциальности</TextInfo>
            <TextInfo>Соглашение об обработке персональных данных</TextInfo>
          </div>
        </SecondBlock>
      </ContainerFooter>
    </Container>
  );
};

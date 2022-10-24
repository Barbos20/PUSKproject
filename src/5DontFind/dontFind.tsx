import React from "react";
import { TextBox, TitleBox } from "../4Invest/style";
import { Container, Description } from "./style";

export const DontFind = () => {
  return (
    <Container>
      <Description>
        <TitleBox>Не видишь нужный тебе токен или криптовалюту?</TitleBox>
        <TextBox>Напиши нам и мы добавим её в наш сервис для тебя</TextBox>
      </Description>
    </Container>
  );
};

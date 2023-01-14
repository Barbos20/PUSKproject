import React from "react";
import { Container, Title } from "../7Plagins/style";
import { Info, TitleInfo, TextInfo, Text } from "./style";

export const Contacts = () => {
  return (
    <Container>
      <Title>Пообщаемся?</Title>
      <Text>
        Поэтому по любым вопросам ты можешь написать нашей команде поддержки,
        руководителю интересующего подразделения или напрямую CEO.
      </Text>
      <Info>
        <div>
          <TitleInfo>Юредическое лицо</TitleInfo>
          <TextInfo>ООО "Pusk"</TextInfo>
        </div>
        <div>
          <TitleInfo>Адрес компании</TitleInfo>
          <TextInfo>Беларусь, г.Брест, ....</TextInfo>
        </div>
        <div>
          <TitleInfo>Email</TitleInfo>
          <TextInfo>wesupportyou@pusk.by</TextInfo>
        </div>
      </Info>
    </Container>
  );
};

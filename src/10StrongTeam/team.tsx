import React from "react";
import styled from "styled-components";
import { TitleBox } from "../4Invest/style";
import { TextBox } from "../6MakeWallet/style";
import { Title } from "../7Plagins/style";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 260px;
  color: #fff;
`;
export const Text = styled.p`
  display: flex;
  text-align: center;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  width: 800px;
  height: 24px;
  color: #d1d1d1;
`;
export const Box = styled.div`
  border: 2px solid #40ffe4;
  padding: 24px 16px;
  margin-top: 80px;
  max-width:1220px;
`;

export const Team = () => {
  return (
    <Container>
      <Title>За сильными решениями —сильная команда</Title>
      <Text>
        Мы хотим, чтобы пользователи любого уровня могли легко достигать своих
        криптоцелей с помощью всего одного продукта — Pusk.
      </Text>
      <Box>
        <TitleBox>Комфортный размер оплаты</TitleBox>
        <TextBox>
          Над проектом работает международная команда специалистов, с доказанной
          экспертизой в области разработки, аналитики и блокчейна. Хотя Pusk
          начал разрабатываться только в конце 2020 года, все участники команды
          ранее работали с крупными-криптопроектами, NFT-маркетами и блокчейном.
        </TextBox>
      </Box>
    </Container>
  );
};

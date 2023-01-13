import React from "react";
import { Text } from "../6MakeWallet/style";
import { Container } from "../4Invest/style";
import { Title } from "../7Plagins/style";
import Wallets from "./utils/Wallets.svg";
import Computer from "./utils/Computer.svg";
import Team from "./utils/Team.svg";
import Health from "./utils/Health.svg";
import { Box, Button, ContainerBox, IMG, TextBox, TitleBox, UpperBox } from "./style";



export const People = () => {
  return (
    <Container>
      <Title>Pusk — это люди</Title>
      <Text>
        Ценным продукт делают люди, которые его создают. Мы ценим людей и
        приглашаем в команду.
      </Text>
      <ContainerBox>
        <UpperBox>
          <IMG src={Wallets} alt="img" />
          <Box>
            <TitleBox>Комфортный размер оплаты</TitleBox>
            <TextBox>
              Ты сам устанавливаешь комфортный тебе уровень твоего гонорара. Мы
              всегда рады вознаградить бонусами за ценный вклад.
            </TextBox>
          </Box>
        </UpperBox>

        <UpperBox>
          <IMG src={Computer} alt="img" />
          <Box>
            <TitleBox>Работай с тем, с чем тебе комфортно </TitleBox>
            <TextBox>
              Выдаем всю технику и покупаем любое ПО, необходимое для
              продуктивной работы
            </TextBox>
          </Box>
        </UpperBox>

        <UpperBox>
          <IMG src={Team} alt="img" />
          <Box>
            <TitleBox>Культура и люди</TitleBox>
            <TextBox>
              Это не про документы и правила, которые создаются корпорациями.
              Тренинги, активности и общение.
            </TextBox>
          </Box>
        </UpperBox>

        <UpperBox>
          <IMG src={Health} alt="img" />
          <Box>
            <TitleBox>Забота о здоровье</TitleBox>
            <TextBox>
              Трёхразовое питание полностью и посещение одного из лучших фитнес
              и wellness-центров за счёт компании
            </TextBox>
          </Box>
        </UpperBox>
      </ContainerBox>
      <Button>Перейти к вакансиям</Button>
    </Container>
  );
};

import React from "react";
import { TitleBox } from "../4Invest/style";
import { TextBox } from "../6MakeWallet/style";
import {
  Box,
  Container,
  DescriptionCard,
  FirstBlock,
  FirstSmallBlock,
  SecondBlock,
  SecondSmallBlock,
  Title,
} from "./style";
import GO from "./utils/GO.svg";
import Box1 from "./utils/box1.svg";
import Box2 from "./utils/box2.svg";
import Box3 from "./utils/box3.svg";
import Box4 from "./utils/box4.svg";
import Box5 from "./utils/box5.svg";

export const Plugins = () => {
  return (
    <Container>
      <Title>Какие плагины уже есть</Title>
      <DescriptionCard>
        <Box>
          <FirstBlock>
            <img src={Box1} alt="img" />
          </FirstBlock>
          <SecondBlock>
            <TitleBox>Умная партнёрская система</TitleBox>
            <TextBox>
              Получай USDT за каждого приглашённого пользователя
            </TextBox>
          </SecondBlock>
          <img src={GO} alt="img" />
        </Box>
        <Box>
          <FirstBlock>
            <img src={Box2} alt="img" />
          </FirstBlock>
          <SecondBlock>
            <TitleBox>Подключение фиатных счетов</TitleBox>
            <TextBox>
              Пополняй и выводи средства с банковских счетов на Pusk
            </TextBox>
          </SecondBlock>
          <img src={GO} alt="img" />
        </Box>
        <Box>
          <FirstBlock>
            <img src={Box3} alt="img" />
          </FirstBlock>
          <SecondBlock>
            <TitleBox>Покупка криптовалют</TitleBox>
            <TextBox>Покупай криптовалюту в несколько кликов</TextBox>
          </SecondBlock>
          <img src={GO} alt="img" />
        </Box>
        <Box>
          <FirstBlock>
            <img src={Box4} alt="img" />
          </FirstBlock>
          <SecondBlock>
            <TitleBox>Лёгкий обмен валютами</TitleBox>
            <TextBox>Свап, одну на другую, быстро и безопасно</TextBox>
          </SecondBlock>
          <img src={GO} alt="img" />
        </Box>
        <Box>
          <FirstSmallBlock>
            <img src={Box5} alt="img" />
          </FirstSmallBlock>
          <SecondSmallBlock>
            <TitleBox>Создать свой плагин</TitleBox>
            <TextBox>Хочешь добавить свою разработку? Пиши нам!</TextBox>
          </SecondSmallBlock>
          <img src={GO} alt="img" />
        </Box>
      </DescriptionCard>
    </Container>
  );
};

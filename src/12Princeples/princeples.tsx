import React from "react";
import { Container } from "../10StrongTeam/team";
import { Title } from "../7Plagins/style";
import one from "./utils/one.svg";
import two from "./utils/two.svg";
import three from "./utils/three.svg";
import { ContainerBox, TitleBox, TextBox, Text, Box } from "./style";


export const Princeples = () => {
  return (
    <Container>
      <Title> Для нас это важно</Title>
      <Text style={{marginBottom:'60px'}}>
        Понять продукт и команду можно по тому, что важно для ее участников
      </Text>
      <div>
        <ContainerBox>
          <img src={one} alt="img" />
          <Box>
            <TitleBox>Жизнь и опыт пользователя</TitleBox>
            <TextBox>
              Мы много времени и средств выделяем на исследование потребностей и
              болей пользователей. Благодаря этому мы быстро находим лучшие
              решения, которые действительно полезны, и не делаем то, что не
              принесёт пользу пользователям.
            </TextBox>
          </Box>
        </ContainerBox>
        <ContainerBox>
          <img src={two} alt="img" />
          <Box>
            <TitleBox>Какая команда - такой продукт</TitleBox>
            <TextBox>
              Мы обеспечиваем нашим сотрудникам одни из лучших условий на рынке,
              чтобы они были максимально продуктивными в работе с продуктом и
              пользователями.
            </TextBox>
          </Box>
        </ContainerBox>
        <ContainerBox>
          <img src={three} alt="img" />
          <Box>
            <TitleBox>Цифровая гигиена</TitleBox>
            <TextBox>
              В мире, где каждую неделю в сеть утекают личные данные, мы создаем
              процессы, нацеленные на обеспечение защиты ключевого
              диджитал-актива — данных пользователей
            </TextBox>
          </Box>
        </ContainerBox>
      </div>
    </Container>
  );
};

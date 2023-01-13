import React from "react";
import { Container } from "../10StrongTeam/team";
import { Title } from "../7Plagins/style";
import one from "./utils/one.svg";
import two from "./utils/two.svg";
import three from "./utils/three.svg";
import styled from "styled-components";

export const Text = styled.p`
  display: flex;
  justify-content: space-evenly;
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
  padding-left: 16px;
  max-width: 1220px;
  height: 164px;
`;

export const TitleBox = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 32px;
`;
export const TextBox = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
`;

export const ContainerBox = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
`;

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

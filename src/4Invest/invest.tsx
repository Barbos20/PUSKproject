import React from "react";
import { Text, Title } from "../3Pusk/style";
import { Box, BoxDescription, Container, Description, DescriptionCard, TextBox, TitleBox } from "./style";
import Image1 from "./utils/image1.png";
import Image2 from "./utils/image2.png";


export const Invest = () => {
  return (
    <Container>
      <Description>
        <Title>Зарабатывай, инвестируй, используй!</Title>
        <Text>
          Отправляй друзьям крипто-подарки, получай переводы, создавай
          крипто-вклады, покупай растущие токены и используй приложение для
          того, что нужно тебе
        </Text>
      </Description>
      <DescriptionCard>
        <Box>
          <BoxDescription>
            <TitleBox>Получай</TitleBox>
            <TextBox>
              Если боишься ошибиться с номером кошелька - используй QR-код.
              Никаких шансов совершить ошибку
            </TextBox>
          </BoxDescription>
          <img src={Image1} alt="img" />
        </Box>
        <Box>
          <BoxDescription>
            <TitleBox>Отправляй</TitleBox>
            <TextBox>
              Контакты помогут легко отправить криптовалюту вашим друзьям,
              коллегам и знакомым. Они ее получат даже если не зарегистрированы
              в сервисе
            </TextBox>
          </BoxDescription>
          <img src={Image2} alt="img" />
        </Box>
      </DescriptionCard>
    </Container>
  );
};

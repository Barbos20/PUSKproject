import React from "react";
import { Title } from "../3Pusk/style";
import { Container, TitleBox } from "../4Invest/style";
import { Box, BoxDescription, DescriptionCard, TextBox, Text } from "./style";
import Image1 from "./utils/1.svg";
import Image2 from "./utils/2.svg";

export const MakeWallet = () => {
  return (
    <Container>
      <div>
        <Title>Идеальный кошелёк тот, который только твой</Title>
        <Text>
          Ты можешь добавлять и удалять нужный тебе функционал. Точно также, как
          ты скачиваешь и удаляешь приложения на твоем смартфоне. Только не
          нужно скачивать.
        </Text>
      </div>
      <div>
        <DescriptionCard>
          <img src={Image1} alt="img" />
          <Box>
            <BoxDescription>
              <TitleBox>Какие плагины существуют</TitleBox>
              <TextBox>
                Круто когда можешь быстро конвертировать средства из привычных
                тебе рублей (фиата) в криптовалюту? Ты можешь завести свою
                виртуальную банковскую карту. Или увидеть растущий токен,
                который ты можешь купить и следить за доходностью. Или когда
                можешь создать вклад в крипте. Все это - реальность.
              </TextBox>
            </BoxDescription>
          </Box>
          <img src={Image2} alt="img" />
          <Box>
            <BoxDescription>
              <TitleBox>Как работают плагины</TitleBox>
              <TextBox>
                Плагины — это как деталь конструктора, которую можно как
                присоединить, так и удалить из кошелька. После регистрации
                кошелька вы сможете сами выбрать: что вам сейчас нужно, а что не
                пригодится. Плагины можно добавлять и удалять в течение всего
                времени работы.
              </TextBox>
            </BoxDescription>
          </Box>
        </DescriptionCard>
      </div>
    </Container>
  );
};

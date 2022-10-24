import React from "react";
import Icon1 from "./utils/Icon.svg";
import Icon2 from "./utils/Icon2.svg";
import Icon3 from "./utils/Icon3.svg";

import { Container, Description, Title, Text, BlockInfo, Box, Block, TitleBlock, TextBlock } from "./style";

export const Pusk = () => {
  return (
    <Container>
      <Description>
        <Title>Pusk — инструмент, который доступен всем</Title>
        <Text>
          Наше приложение — это десятки микросервисов, доступных в одном экране,
          привычном и удобном тебе дизайне
        </Text>
      </Description>
      <BlockInfo>
        <Box>
          <img src={Icon1} alt='Icon'/>
          <Block>
            <TitleBlock>Нам нечего скрывать</TitleBlock>
            <TextBlock>Исходный код открыт и доступен каждому</TextBlock>
          </Block>
        </Box>
        <Box>
          <img src={Icon2} alt='Icon'/>
          <Block>
            <TitleBlock>Вам не за что волноваться</TitleBlock>
            <TextBlock>
              У сервиса нет доступа к твоему кошельку и средствам
            </TextBlock>
          </Block>
        </Box>

        <Box>
          <img src={Icon3} alt='Icon'/>
          <Block>
            <TitleBlock>Вместе в будущее</TitleBlock>
            <TextBlock>
              Для наших пользователей мы сделали самую выгодную реферальную
              программу
            </TextBlock>
          </Block>
        </Box>
      </BlockInfo>
    </Container>
  );
};

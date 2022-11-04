import React from "react";
import {
  Box,
  Container,
  Title,
  Text,
  BoxForm,
  BoxInput,
  Description,
  File,
  Button,
} from "./style";
import add from "./utils/add.svg";

export const Form = () => {
  return (
    <Container>
      <Box>
        <Title>Разработай собственный криптосервис</Title>
        <Text>
          Не обязательно иметь миллионы чтобы создавать продукт.Ты уже можешь
          предложить нам своё решение или продукт, который будет сразу доступен
          тысячам пользователей. Win-win для всех.
        </Text>
      </Box>
      <BoxForm>
        <BoxInput placeholder={"Ваше имя"} />
        <BoxInput placeholder={"Email"} />
        <Description placeholder={"Расскажите о своём опыте"} />
        <div style={{display:'flex',alignItems:'center',marginBottom: '44px'}}>
        <img src={add} alt="img" />
          <File id="file-input" />
          <label htmlFor="file-input" style={{marginLeft:'15px'}}>
            {" "}
             Прикрепить файл
          </label>
        </div>
        <Button>Отправить</Button>
      </BoxForm>
    </Container>
  );
};

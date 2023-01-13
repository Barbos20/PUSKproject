import React from "react";
import { Container, Text } from "../10StrongTeam/team";
import { Title } from "../7Plagins/style";
import roadMap from "./utils/RoadMap.svg";
import styled from "styled-components";

export const IMG = styled.img`
  margin-top: 60px;
`;


export const RoadMap = () => {
  return (
    <Container>
      <Title>Есть цели и путь </Title>
      <Text>
        Где мы сейчас, какие разработки нас ждут в будущем, к чему мы стремимся
        - показываем на нашей карте.
      </Text>
      <IMG src={roadMap} alt="img" />
    </Container>
  );
};

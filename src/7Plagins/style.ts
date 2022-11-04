import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 260px;
  color: #fff;
`;
export const Title = styled.h1`
  display: flex;
  text-align: center;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 60px;
  line-height: 64px;
`;
export const DescriptionCard = styled.div`
  margin-top: 30px;
`;
export const Box = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
`;
export const FirstBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  border: 2px solid #40ffe4;
  width: 240px;
  height: 160px;
`;
export const SecondBlock = styled.div`
  margin-left: -2px;
  border: 2px solid #40ffe4;
  padding: 24px 0px 72px 16px;
  width: 515px;
`;
export const FirstSmallBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #40ffe4;
  width: 240px;
  height: 120px;
`;
export const SecondSmallBlock = styled.div`
  margin-left: -2px;
  border: 2px solid #40ffe4;
  padding: 24px 0px 32px 16px;
  width: 515px;
`;

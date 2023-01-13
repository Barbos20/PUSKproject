import React from "react";
import styled from "styled-components";

export const ContainerBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  padding-top: 40px;
`;
export const UpperBox = styled.div``;

export const IMG = styled.img`
  margin-bottom: -3px;
`;

export const Box = styled.div`
  border: 2px solid #40ffe4;
  padding: 16px;
  height: 104px;
  max-width: 700px;
`;

export const TitleBox = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  padding-bottom: 8px;
`;
export const TextBox = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
`;
export const Button = styled.button`
  margin-top: 64px;
  height: 60px;
  width: 280px;
  padding: 20px 10px;
  color: #121212;
  background-color: #40ffe4;
  border: none;
  outline: 0;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
`;

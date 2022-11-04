import React from "react";
import styled from "styled-components";

export const Text = styled.p`
  display: flex;
  text-align: center;
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
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
border: 2px solid #40ffe4;
width: 538px;
margin-right: 20px;
`;
export const BoxDescription = styled.div`
height: 170px;
padding: 24px 16px 24px 16px;
`;
export const DescriptionCard = styled.div`
  display: flex;
align-items:flex-start;
  margin-top: 80px;
`;
export const TextBox = styled.div`
  display: flex;
  margin-top: 12px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
`;

import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 260px;
  color: #fff;
`;
export const Box = styled.div`
  width: 898px;
  height: 270px;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: space-between;
  align-items: flex-start;
`;
export const Title = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 60px;
  line-height: 64px;
  height: 176px;
  margin-top: 0px;
`;
export const Text = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  height: 26px;
  color: #d1d1d1;
`;
export const BoxForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 25px;
  border: 2px solid #40ffe4;
  height: 490px;
  width: 495px;
`;
export const BoxInput = styled.input`
  width: 440px;
  height: 64px;
  color: #d1d1d1;
  padding-left: 16px;
  margin-bottom: 16px;
  border: 2px solid #40ffe4;
  background-color: #252525;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  outline: 0;
`;
export const Description = styled.input`
  width: 440px;
  height: 140px;
  color: #d1d1d1;
  padding-left: 16px;
  margin-bottom: 16px;
  border: 2px solid #40ffe4;
  background-color: #252525;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  outline: 0;
`;
export const File = styled.input.attrs({ type: "file" })`
  color: #d1d1d1;
  margin-bottom: 44px;
  display: none;
  background-color: #252525;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  outline: 0;
`;
export const Button = styled.button`
  width: 460px;
  height: 60px;
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

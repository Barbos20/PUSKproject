import React from "react";
import styled from "styled-components";

export const Header = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  margin-left:-112px;
  margin-right:-122px;
  top: 0;
  left: 112px;
  right: 112px;
  align-items: center;
  height: 80px;
  background: rgba(18, 18, 18, 0.2);
  backdrop-filter: blur(5px);
`;
export const Img = styled.img`
  width: 110px;
  height: 26px;
  padding-left:112px
`;
export const Nav = styled.nav`
  width: 212px;
  display: flex;
  justify-content: space-between;
  display: flex;
  color: #ffffff;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  padding-right:112px;
`;
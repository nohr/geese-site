"use client";

import styled from "styled-components";

export const Geese = styled.h1`
  position: absolute;
  left: 20px;
  top: 20px;
  z-index: 20 !important;
  font-family: "CaslonItalian";
  font-weight: 700;
  font-size: 10vw;
  margin: 0;
  padding: 0;
  writing-mode: vertical-lr;
  text-orientation: upright;
  letter-spacing: -20px;

  @media (max-width: 768px) {
    font-size: 18vw;
  }
`;

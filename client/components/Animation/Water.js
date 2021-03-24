import React from 'react';
import styled from 'styled-components';

import { WrapperBox } from '../Layout';

const Water = () => {
  return (
    <WrapperBox background="#fff" border="4px solid #000">
      <Box></Box>
    </WrapperBox>
  );
};

export default Water;

const Box = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 500px;
  /* background: linear-gradient(to bottom, ##0080ff, #0080ff); */
  background: linear-gradient(#66b3ff, #0080ff);
  border-radius: 50%;
  border: 16px solid #fff;
  box-shadow: 0 0 0 16px #0080ff;
  overflow: hidden;

  &::before {
    content: '';
    width: 200%;
    height: 200%;
    position: absolute;
    top: 0;
    left: -50%;
    background: rgba(255, 255, 255, 0.7);
    transform: translate(0%, -75%);
    border-radius: 45%;

    animation: Wave 3s linear infinite;
  }

  &::after {
    content: '';
    width: 200%;
    height: 200%;
    position: absolute;
    top: 0;
    left: -50%;
    background: rgba(255, 255, 255, 0.8);
    transform: translate(0%, -75%);
    border-radius: 40%;
    animation: Wave 3s linear infinite;
  }

  @keyframes Wave {
    0% {
      transform: translate(0%, -75%) rotate(0deg);
    }

    100% {
      transform: translate(0%, -75%) rotate(360deg);
    }
  }
`;

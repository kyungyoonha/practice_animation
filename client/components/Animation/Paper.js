import React from 'react';
import styled from 'styled-components';
import { WrapperBox } from '../Layout';

const Paper = () => {
  return (
    <WrapperBox background="#0080ff">
      <Box></Box>
    </WrapperBox>
  );
};

export default Paper;

const Box = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-30deg) skew(15deg);
  width: 500px;
  height: 350px;
  background: #fff;
  box-shadow: -10px 10px 10px rgba(0, 0, 0, 0.4);
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: 20px;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.4);
    box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.4);
    transition: 0.5s;
  }

  &::after {
    content: '';
    position: absolute;
    top: -40px;
    left: 40px;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.4);
    box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.4);
    transition: 0.5s;
  }

  &:hover::before {
    top: 0;
    left: 0;
    opacity: 0;
  }

  &:hover::after {
    top: 0;
    left: 0;
    opacity: 0;
  }
`;

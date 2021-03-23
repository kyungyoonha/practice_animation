import React from 'react';
import styled from 'styled-components';
import { WrapperBox } from '../Layout';

const Round = () => {
  return (
    <WrapperBox>
      <Box>Round</Box>
    </WrapperBox>
  );
};

export default Round;

const Box = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: sans-serif;
  text-transform: uppercase;
  font-size: 5rem;
  font-weight: 700;
  color: #fff;

  width: 500px;
  height: 500px;
  line-height: 500px;
  border-right: 12px solid #f00;
  border-top: 12px solid #ff0;
  border-bottom: 12px solid #0f0;
  border-left: 12px solid #0ff;
  border-radius: 50%;
  box-shadow: 0 0 100px rgba(0, 0, 0, 1), 0 0 80px rgba(0, 0, 0, 1), 0 0 50px rgba(0, 0, 0, 1);
  background: #000;
  text-align: center;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    height: 90%;
    border: 8px dotted #fff;
    border-radius: 50%;
  }
`;

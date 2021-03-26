import React from 'react';
import styled from 'styled-components';

import { WrapperBox } from '../Layout';

const Loading = () => {
  return (
    <WrapperBox>
      <Box>
        <span></span>
        Loading
      </Box>
    </WrapperBox>
  );
};

export default Loading;

const Box = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  /* background: #fff; */
  border-radius: 50%;
  color: #fff;
  text-align: center;
  line-height: 280px;
  border: 6px solid gray;
  box-shadow: inset 0px 0px 5px #fff;
  font-size: 3rem;
  font-weight: 900;
  color: yellow;
  text-shadow: 0 0 30px yellow;

  span {
    content: '';
    position: absolute;
    top: -6px;
    left: -6px;
    width: 100%;
    height: 100%;
    border: 6px solid transparent;
    border-top: 6px solid yellow;
    border-right: 6px solid yellow;
    border-radius: 50%;
    box-sizing: content-box;

    animation: animateCircle 1s linear infinite;
  }
  span::before {
    content: '';
    position: absolute;
    top: calc(86%);
    left: calc(86%);
    transform: translate(-50%, -50%);
    width: 30px;
    height: 30px;
    background: yellow;
    border-radius: 50%;
    box-shadow: 0 0 30px yellow, 0 0 30px yellow;
  }

  @keyframes animateCircle {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

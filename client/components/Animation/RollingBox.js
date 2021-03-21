import React from 'react';
import styled from 'styled-components';

const RollingBox = () => {
  return (
    <Wrapper>
      <Box />
    </Wrapper>
  );
};

export default RollingBox;

const Wrapper = styled.div`
  width: 100%;
  height: 700px;
  background: #000;
  margin-top: 30px;
  position: relaitve;
`;

const Box = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  border: 10px solid #fff;

  font-family: sans-serif;
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  animation: rollingBox 4s linear infinite;

  &::before {
    content: '';
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #fff;
    box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.4);

    animation: rolling 4s linear infinite;
  }

  @keyframes rollingBox {
    0% {
      transform: translate(-50%, -50%) rotate(0);
    }
    100% {
      transform: translate(-50%, -50%) rotate(-360deg);
    }
  }

  @keyframes rolling {
    0% {
      transform: translate(0, 0);
    }
    25% {
      transform: translate(150px, 0);
    }
    50% {
      transform: translate(150px, 150px);
    }
    75% {
      transform: translate(0, 150px);
    }
    100% {
      transform: translate(0, 0);
    }
  }
`;

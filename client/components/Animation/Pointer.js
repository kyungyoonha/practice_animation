import React from 'react';
import styled from 'styled-components';

const Pointer = () => {
  return (
    <Wrapper>
      <Box />
      <Shadow />
    </Wrapper>
  );
};

export default Pointer;

const Wrapper = styled.div`
  width: 100%;
  height: 700px;
  margin-top: 30px;
  position: relative;
  background: #000;
`;

const Box = styled.div`
  width: 300px;
  height: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-45deg);
  border-radius: 50%;
  border-bottom-left-radius: 0;
  background: linear-gradient(to bottom, yellow, green);
  z-index: 2;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #000;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    box-shadow: -5px 0px 5px rgba(0, 0, 0, 0.8);
  }
`;

const Shadow = styled.div`
  position: absolute;
  bottom: 70px;
  left: 50%;
  transform: translate(-50%, -50%);
  background: blue;
  width: 200px;
  height: 50px;
  border-radius: 50%;
  z-index: 1;
  filter: blur(10px);
  animation: shadow 1s linear infinite;

  @keyframes shadow {
    0% {
      width: 200px;
    }
    100% {
      width: 400px;
      filter: blur(30px);
    }
  }
`;

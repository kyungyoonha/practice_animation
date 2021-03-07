import React from 'react';
import styled from 'styled-components';

const Rain = () => {
  return (
    <Wrapper>
      <StyledRain />
    </Wrapper>
  );
};

export default Rain;

const Wrapper = styled.div`
  width: 100%;
  height: 700px;
  margin-top: 30px;
  background: url('https://user-images.githubusercontent.com/29701385/110235106-b3d45080-7f71-11eb-9ee5-a1a9bc47cab0.jpg');
  background-size: cover;
  position: relative;
  /* filter: blur(1px); */

  @keyframes rain {
    0% {
      background-position: 0% 0%;
    }

    100% {
      background-position: 20% 100%;
    }
  }

  @keyframes lighting {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 0;
    }
    14% {
      opacity: 1;
    }
    15% {
      opacity: 0;
    }
    22% {
      opacity: 0;
    }
    24% {
      opacity: 1;
    }
    26% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
`;

const StyledRain = styled.div`
  height: 100vh;
  background: url('https://user-images.githubusercontent.com/29701385/110234824-f9901980-7f6f-11eb-8fed-9c4fa3ea40ec.png');
  animation: rain 0.3s linear infinite;

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: #fff;
    opacity: 0;
    animation: lighting 3s linear infinite;
  }
`;

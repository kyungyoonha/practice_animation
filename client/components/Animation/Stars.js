import React from 'react';
import styled from 'styled-components';

const Stars = () => {
  return (
    <Wrapper>
      <h1>Background Effect</h1>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </Wrapper>
  );
};

export default Stars;

const Wrapper = styled.div`
  width: 100%;
  height: 700px;
  margin-top: 30px;
  position: relative;
  background: #000;
  overflow: hidden;

  h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-size: 3rem;
    font-weight: 700;
  }

  li {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(2);
    width: 100%;
    height: 100%;
    background: url('https://user-images.githubusercontent.com/29701385/110481728-38b69a00-812b-11eb-8f04-18069162ba60.png');
    background-size: contain;
    animation: animate_stars 10s infinite linear;
  }

  img:nth-child(2) {
    animation-delay: 2s;
  }
  img:nth-child(3) {
    animation-delay: 4s;
  }
  img:nth-child(4) {
    animation-delay: 6s;
  }
  img:nth-child(5) {
    animation-delay: 10s;
  }
  @keyframes animate_stars {
    0% {
      transform: translate(-50%, -50%) rotate(0deg) scale(1.5);
      opacity: 0;
    }

    50% {
      transform: translate(-50%, -50%) rotate(180deg) scale(1.2);
      opacity: 0.5;
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg) scale(1);
      opacity: 0;
    }
  }
`;

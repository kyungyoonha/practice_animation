import React from 'react';
import styled from 'styled-components';

const Smoke = () => {
  return (
    <Wrapper>
      <div className="chimney"></div>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </Wrapper>
  );
};

export default Smoke;

const Wrapper = styled.div`
  width: 100%;
  height: 700px;
  position: relative;
  background: #fff;
  border: 4px solid #000;
  margin-top: 30px;
  overflow: hidden;

  .chimney {
    width: 120px;
    height: 150px;
    background: #000;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    /* box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.6); */

    &::before {
      content: '';
      position: absolute;
      top: 16px;
      left: -30px;
      width: 30px;
      height: 150px;
      background: rgba(0, 0, 0, 0.6);
      transform: skewY(-45deg);
    }
  }

  li {
    position: absolute;
    bottom: 100px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #000;
    filter: blur(3px);
  }

  li:nth-child(odd) {
    animation: smoke-left 3s linear infinite;
  }

  li:nth-child(even) {
    animation: smoke-right 3s linear infinite;
  }

  li:nth-child(2) {
    animation-delay: 1s;
  }
  li:nth-child(3) {
    animation-delay: 2s;
  }
  li:nth-child(4) {
    animation-delay: 3s;
  }
  li:nth-child(5) {
    animation-delay: 4s;
  }
  li:nth-child(6) {
    animation-delay: 5s;
  }

  @keyframes smoke-left {
    0% {
      transform: translate(-50%, 0);
    }
    100% {
      transform: translate(-100px, -400px) scale(2);
      filter: blur(10px);
      opacity: 0;
    }
  }
  @keyframes smoke-right {
    0% {
      transform: translate(-50%, 0);
    }
    100% {
      transform: translate(100px, -400px) scale(2);
      filter: blur(10px);
      opacity: 0;
    }
  }
`;

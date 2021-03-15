import React from 'react';
import styled from 'styled-components';

const ButtonEffect = () => {
  return (
    <Wrapper>
      <Button>Button</Button>
    </Wrapper>
  );
};

export default ButtonEffect;

const Wrapper = styled.div`
  width: 100%;
  height: 700px;
  margin-top: 30px;
  background: #000;
  position: relative;
  font-family: sans-serif;
  font-size: 2rem;
  font-weight: 700;
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 80px;
  background: #000;
  //border: 1px solid #fff;
  text-transform: uppercase;
  color: #fff;
  text-align: center;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80%;
    height: 100%;
    border-right: 1px solid #fff;
    border-left: 1px solid #fff;
    transform: translate(-50%, -50%) scale(1.3);
    transition: 0.6s;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 70%;
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
    transform: translate(-50%, -50%) scale(1.3);
    transition: 0.6s;
  }

  &:hover::before {
    transform: translate(-50%, -50%) scale(1.3) rotateY(180deg);
  }
  &:hover::after {
    transform: translate(-50%, -50%) scale(1.3) rotateX(180deg);
  }
`;

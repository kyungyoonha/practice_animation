import React from 'react';
import styled from 'styled-components';

const Icon = () => {
  return (
    <Wrapper>
      <Box>
        <i className="far fa-smile-wink"></i>
      </Box>
    </Wrapper>
  );
};

export default Icon;

const Wrapper = styled.div`
  width: 100%;
  height: 700px;
  background: #000;
  margin-top: 30px;
  position: relative;
`;

const Box = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 280px;
  height: 160px;
  border-left: 4px solid rgb(255, 255, 255, 0);
  border-right: 4px solid rgb(255, 255, 255, 0);

  font-family: sans-serif;
  text-transform: uppercase;
  font-size: 6rem;
  font-weight: 700;
  color: #fff;
  text-align: center;
  line-height: 160px;
  transition: 0.5s;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(0);
    border-left: 4px solid rgb(255, 255, 255, 0);
    border-right: 4px solid rgb(255, 255, 255, 0);
    width: 100%;

    height: 100%;
    transition: 0.5s;
  }
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(0);
    border-left: 4px solid rgb(255, 255, 255, 0);
    border-right: 4px solid rgb(255, 255, 255, 0);
    width: 100%;
    height: 100%;
    transition: 0.5s;
  }

  &:hover {
    border-left: 4px solid rgb(255, 255, 255, 1);
    border-right: 4px solid rgb(255, 255, 255, 1);
  }
  &:hover::before {
    transform: translate(-50%, -50%) rotate(120deg);
    border-left: 4px solid rgb(255, 255, 255, 1);
    border-right: 4px solid rgb(255, 255, 255, 1);
  }
  &:hover::after {
    transform: translate(-50%, -50%) rotate(-120deg);
    border-left: 4px solid rgb(255, 255, 255, 1);
    border-right: 4px solid rgb(255, 255, 255, 1);
  }
`;

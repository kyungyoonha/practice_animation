import React from 'react';
import styled from 'styled-components';

const split = () => {
  return (
    <Wrapper>
      <Box data-content="Split">Split</Box>
    </Wrapper>
  );
};

export default split;

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

  font-family: sans-serif;
  text-transform: uppercase;
  letter-spacing: 4px;
  font-size: 8rem;
  font-weight: 700;
  color: #fff;
  box-sizing: border-box;
  margin: 0;
  padding: 0;

  &::before {
    content: attr(data-content);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
    margin: 0;
    padding: 0;
    color: #000;
    background: #000;
    overflow: hidden;
    z-index: 1;
  }

  &::after {
    content: attr(data-content);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 55%;
    margin: 0;
    padding: 0;
    color: #fff;
    overflow: hidden;
    z-index: 2;
    border-bottom: 0px solid yellow;
    transition: 0.6s;
  }

  &:hover::after {
    transform: translateY(-10px);
    border-bottom: 10px solid yellow;
  }
`;

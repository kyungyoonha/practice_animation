import React from 'react';
import styled from 'styled-components';

const BackgroundHover = () => {
  return (
    <Wrapper>
      <Box></Box>
    </Wrapper>
  );
};

export default BackgroundHover;

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
  width: 500px;
  height: 500px;
  border: 4px solid #fff;
  overflow: hidden;

  font-family: sans-serif;
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 700;
  color: #fff;

  background: url('https://user-images.githubusercontent.com/29701385/110235106-b3d45080-7f71-11eb-9ee5-a1a9bc47cab0.jpg');
  background-size: cover;
  background-position-x: -100px;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: url('https://user-images.githubusercontent.com/29701385/110235106-b3d45080-7f71-11eb-9ee5-a1a9bc47cab0.jpg');
    background-size: cover;
    background-position-x: -100px;

    filter: grayscale(100%);
    transition: 1s;
    border-right: 4px solid black;
  }

  &:hover::before {
    width: 0;
  }
`;

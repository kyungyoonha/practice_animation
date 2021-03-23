import React from 'react';
import styled from 'styled-components';

const TextBorder = () => {
  return (
    <Wrapper>
      <Box data-content="Border">Border</Box>
    </Wrapper>
  );
};

export default TextBorder;

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
  transform: translateY(-50%);
  margin-left: 200px;
  font-family: sans-serif;
  text-transform: uppercase;
  font-size: 11rem;
  font-weight: 900;
  color: #fff;

  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 4px;

  &::before {
    content: attr(data-content);
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);

    color: #fff;
    -webkit-text-fill-color: #fff;
    width: 0%;
    overflow: hidden;
    transition: 0.6s;
  }

  &:hover::before {
    width: 100%;
  }
`;

import React from 'react';
import styled from 'styled-components';

const Test = () => {
  return (
    <Wrapper>
      <Box>Test</Box>
    </Wrapper>
  );
};

export default Test;

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

  font-family: sans-serif;
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
`;

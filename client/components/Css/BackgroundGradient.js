import React from 'react';
import styled from 'styled-components';

const BackgroundGradient = () => {
  return (
    <Wrapper>
      <Box>
        <h1>Background</h1>
      </Box>
    </Wrapper>
  );
};

export default BackgroundGradient;

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
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  overflow: hidden;

  width: 490px;
  height: 350px;
  border: 5px solid #fff;
  border-radius: 4px;
  background: repeating-linear-gradient(
    45deg,
    ${(props) => props.theme.brown[0]},
    ${(props) => props.theme.brown[0]} 10px,
    ${(props) => props.theme.green[0]} 10px,
    ${(props) => props.theme.green[0]} 20px
  );

  h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &:hover {
    animation: backgroundRepeat 2s linear infinite;
  }

  @keyframes backgroundRepeat {
    0% {
      background-position: 0;
    }
    100% {
      background-position: 400px;
    }
  }
`;

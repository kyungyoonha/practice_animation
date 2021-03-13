import React from 'react';
import styled from 'styled-components';

const TextGradient = () => {
  return (
    <Wrapper>
      <Text>Text Gradient</Text>
    </Wrapper>
  );
};

export default TextGradient;

const Wrapper = styled.div`
  width: 100%;
  height: 700px;
  background: #000;
  margin-top: 30px;
  position: relative;
  text-align: center;

  @keyframes textGradient {
    0% {
      background-position: 0% 100%;
    }
    50% {
      background-position: 100% 0%;
    }
    100% {
      background-position: 0% 100%;
    }
  }
`;

const Text = styled.h1`
  height: 700px;
  line-height: 700px;
  background-image: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet);
  font-size: 7rem;
  font-weight: 900;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 1000%;
  animation: textGradient 10s linear infinite;
`;

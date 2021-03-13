import React from 'react';
import styled from 'styled-components';

const TextTransparent = () => {
  return (
    <Wrapper>
      <h1>Text Effect</h1>
    </Wrapper>
  );
};

export default TextTransparent;

const Wrapper = styled.div`
  width: 100%;
  height: 700px;
  margin-top: 30px;
  background: #000;
  position: relative;
  color: white;

  h1 {
    text-align: center;
    font-size: 8rem;
    font-weight: 900;
    height: 700px;
    line-height: 700px;
    background-image: linear-gradient(to bottom, red, orange, yellow, green, blue, indigo, violet);
    background-attachment: fixed;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

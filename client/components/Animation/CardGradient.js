import React from 'react';
import styled from 'styled-components';

const CardGradient = ({ className }) => {
  return (
    <Wrapper className={className}>
      <h1>Card</h1>
      <p>
        Ad reprehenderit occaecat dolor adipisicing consectetur pariatur commodo non pariatur esse reprehenderit et
        velit. Ad reprehenderit occaecat dolor adipisicing consectetur pariatur commodo non pariatur esse reprehenderit
        et velit.
      </p>
    </Wrapper>
  );
};

export default CardGradient;

const Wrapper = styled.div`
  position: relative;
  width: 300px;
  height: 350px;
  color: #fff;
  padding: 30px;
  /* overflow: hidden; */

  border: 4px solid transparent;
  border-image: linear-gradient(45deg, #f00, #0f0, #0ff, #00f, #ff0, #f0f);
  border-image-slice: 1;
  h1 {
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid gray;
  }
`;

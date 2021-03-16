import React from 'react';
import styled from 'styled-components';

const CardGlass = ({ className }) => {
  return (
    <Wrapper className={className}>
      <span className="glass" />
      <h1>Card</h1>
      <p>
        Ad reprehenderit occaecat dolor adipisicing consectetur pariatur commodo non pariatur esse reprehenderit et
        velit. Ad reprehenderit occaecat dolor adipisicing consectetur pariatur commodo non pariatur esse reprehenderit
        et velit.
      </p>
    </Wrapper>
  );
};

export default CardGlass;

const Wrapper = styled.div`
  position: relative;
  width: 300px;
  height: 350px;
  color: #fff;
  padding: 30px;
  overflow: hidden;

  h1 {
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid gray;
  }

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    border-top: 4px solid #fff;
    border-left: 4px solid #fff;
    width: 0%;
    height: 0%;
    transition: 0.3s;
    opacity: 0;
  }

  &::after {
    position: absolute;
    bottom: 0;
    right: 0;
    content: '';
    border-top: 4px solid #fff;
    border-left: 4px solid #fff;
    width: 0%;
    height: 0%;
    transition: 0.3s;
    transform: rotate(180deg);
    opacity: 0;
  }

  /* &:hover::before,
  &:hover::after {
    width: 100%;
    height: 100%;
    opacity: 1;
  } */

  span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    opacity: 0.6;
    transform: translateX(-140%) skewX(5deg);
    border: 1px solid blue;
    transition: 0.3s;
  }

  &:hover {
    &::after,
    &::before {
      width: 100%;
      height: 100%;
      opacity: 1;
    }
    span {
      transform: translateX(140%) skewX(5deg);
      transition-delay: 0.4s;
    }
  }
`;

import React from 'react';
import styled from 'styled-components';

const Card = ({ className }) => {
  return (
    <Wrapper className={className}>
      <div className="card">
        <h1>Card</h1>
        <p>
          Ad reprehenderit occaecat dolor adipisicing consectetur pariatur commodo non pariatur esse reprehenderit et
          velit. Ad reprehenderit occaecat dolor adipisicing consectetur pariatur commodo non pariatur esse
          reprehenderit et velit.
        </p>
      </div>
    </Wrapper>
  );
};

export default Card;

const Wrapper = styled.div`
  width: 300px;
  height: 350px;
  background: #fff;
  padding: 30px;
  border-radius: 4%;
  overflow: hidden;
  box-shadow: 8px 8px 0px rgba(0, 0, 0, 0.3);
  border: 1px solid #868e96;

  h1 {
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid gray;
  }

  .card {
    position: relative;
    height: 100%;
    width: 100%;
    background: transparent;
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 0%;
      height: 0%;
      background: rgba(0, 255, 0, 0.3);
      z-index: 0;
      transition: 0.4s;
    }

    &:hover::before {
      width: 300px;
      height: 350px;
      border: 1px solid blue;
    }
  }
`;

import React from 'react';
import styled from 'styled-components';

const Card = () => {
  return (
    <Wrapper>
      <StyledCard>
        <div className="card">
          <h1>Card</h1>
          <p>
            Ad reprehenderit occaecat dolor adipisicing consectetur pariatur commodo non pariatur esse reprehenderit et
            velit. Ad reprehenderit occaecat dolor adipisicing consectetur pariatur commodo non pariatur esse
            reprehenderit et velit.
          </p>
        </div>
      </StyledCard>
    </Wrapper>
  );
};

export default Card;

const Wrapper = styled.div`
  width: 100%;
  height: 700px;
  margin-top: 30px;
  background: #000;
  position: relative;
`;

const StyledCard = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 350px;
  background: #fff;
  padding: 30px;
  border-radius: 4%;
  overflow: hidden;
  box-shadow: 8px 8px 0px #ffffaa;
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
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 0;
      height: 0;
      background: yellow;
      z-index: -1;
      transition: 0.4s;
    }

    &:hover::before {
      width: 300px;
      height: 350px;
    }
  }
`;

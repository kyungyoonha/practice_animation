import React from 'react';
import styled from 'styled-components';

const Buttons = () => {
  return (
    <Wrapper>
      <ButtonBox>
        <button className="prev" data-content="prev">
          Prev
        </button>
        <button className="next" data-content="next">
          Next
        </button>
      </ButtonBox>
    </Wrapper>
  );
};

export default Buttons;

const Wrapper = styled.div`
  width: 100%;
  height: 700px;
  background: #eeeeee;
  margin-top: 30px;
  position: relative;
`;

const ButtonBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;

  button {
    width: 200px;
    height: 80px;
    line-height: 80px;
    border: 1px solid #7201b4;
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: 700;
  }
  .prev {
    position: relative;
    overflow: hidden;
  }

  .prev::before {
    content: attr(data-content);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #7201b4;
    color: #fff;
    transition: 0.5s;
    transform: translateX(100%);
  }

  .prev:hover::before {
    transform: translateX(0%);
  }

  .next {
    position: relative;
    overflow: hidden;
  }

  .next::before {
    content: attr(data-content);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #7201b4;
    color: #fff;
    transition: 0.5s;
    transform: translateX(-100%);
  }

  .next:hover::before {
    transform: translateX(0%);
  }
`;

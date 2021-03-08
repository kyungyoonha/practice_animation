import React from 'react';
import styled from 'styled-components';

const Column = () => {
  return (
    <Wrapper>
      <StyledColumn>
        <Li color="red">1</Li>
        <Li color="blue">2</Li>
        <Li color="green">3</Li>
        <Li color="yellow">4</Li>
        <Li color="greenyellow">5</Li>
        <Li color="skyblue">6</Li>
        <Li color="orange">7</Li>
        <Li color="gray">8</Li>
      </StyledColumn>
    </Wrapper>
  );
};

export default Column;

const Wrapper = styled.div`
  width: 100%;
  height: 700px;
  background: #000;
  position: relative;
  margin-top: 30px;
`;

const StyledColumn = styled.ul`
  display: flex;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;

  li:hover {
    flex-grow: 4;
  }
`;

const Li = styled.li`
  display: block;
  height: 200px;
  line-height: 200px;
  text-align: center;
  color: #fff;
  background: ${(props) => props.color};
  flex-grow: 1;
  font-size: 6rem;
  font-weight: 900;
  transition: 0.5s;
`;

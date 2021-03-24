import React from 'react';
import styled from 'styled-components';
import { WrapperBox } from '../Layout';

const LetterSpacing = () => {
  return (
    <StyledWrapper>
      <Box>
        <li>L</li>
        <li>E</li>
        <li>T</li>
        <li>T</li>
        <li>E</li>
        <li>R</li>
      </Box>
    </StyledWrapper>
  );
};

export default LetterSpacing;

const StyledWrapper = styled(WrapperBox)`
  text-align: center;
`;

const Box = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  font-size: 5rem;
  font-weight: 900;
  color: #fff;
  text-transform: uppercase;

  li {
    animation: letterSpacing 2s linear infinite;
  }
  li:nth-child(2) {
    animation-delay: 0, 1s;
  }
  li:nth-child(3) {
    animation-delay: 0.2s;
  }
  li:nth-child(4) {
    animation-delay: 0.3s;
  }
  li:nth-child(5) {
    animation-delay: 0.4s;
  }
  li:nth-child(6) {
    animation-delay: 0.5s;
  }

  @keyframes letterSpacing {
    0% {
      letter-spacing: 2px;
      transform: translateX(-50px);
      opacity: 0;
    }
    50% {
      letter-spacing: 10px;
      transform: translateX(0px);
      opacity: 1;
    }
    0% {
      letter-spacing: 2px;
      transform: translateX(-50px);
      opacity: 0;
    }
  }
`;

import React from 'react';
import styled from 'styled-components';

const Pulse = () => {
  return (
    <Wrapper>
      <StyledPulse>PULSE</StyledPulse>
    </Wrapper>
  );
};

export default Pulse;

const Wrapper = styled.div`
  width: 100%;
  height: 700px;
  margin-top: 30px;
  background: #000;
  position: relative;
`;

const StyledPulse = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 250px;
  height: 250px;
  line-height: 250px;
  border-radius: 50%;
  background: orange;
  text-align: center;
  color: #000;
  font-size: 3rem;
  font-weight: 900;

  animation: animate 3s linear infinite;

  @keyframes animate {
    0% {
      box-shadow: 0 0 0 0 rgba(255, 109, 74, 0.7);
    }

    40% {
      box-shadow: 0 0 0 50px rgba(255, 109, 74, 0);
    }
    80% {
      box-shadow: 0 0 0 50px rgba(255, 109, 74, 0);
    }
    100% {
      box-shadow: 0 0 0 50px rgba(255, 109, 74, 0);
    }
  }
`;

import React from 'react';
import styled from 'styled-components';
import { WrapperBox } from '../Layout';

const TextShadow = () => {
  return (
    <StyledWrapper>
      <Box>
        <h2>3D Effect</h2>
      </Box>
    </StyledWrapper>
  );
};

export default TextShadow;

const StyledWrapper = styled(WrapperBox)`
  text-align: center;
`;

const Box = styled.div`
  h2 {
    font-size: 8rem;
    font-weight: 900;
    color: #fff;
  }

  &:hover {
    text-shadow: 0 1px #ccc, 0 2px #ccc, 0 3px #ccc, 0 4px #ccc, 0 5px #ccc, 0 6px #ccc, 0 7px #ccc;
  }
`;

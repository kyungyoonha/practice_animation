import React from 'react';
import styled from 'styled-components';

import { WrapperBox } from '../Layout';

const Water = () => {
  return (
    <WrapperBox>
      <Box>Water</Box>
    </WrapperBox>
  );
};

export default Water;

const Box = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  background: #fff;
  border-radius: 50%;
`;

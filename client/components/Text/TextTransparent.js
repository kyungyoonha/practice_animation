import React from 'react';
import styled from 'styled-components';

import { WrapperBox } from '../Layout';

const TextTransparent = () => {
  return (
    <WrapperBox background="url('https://user-images.githubusercontent.com/29701385/110235106-b3d45080-7f71-11eb-9ee5-a1a9bc47cab0.jpg')">
      <Box>Transparent</Box>
    </WrapperBox>
  );
};

export default TextTransparent;

const Box = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  height: 300px;
  line-height: 300px;

  text-align: center;
  font-size: 8rem;
  background: rgba(0, 0, 0, 0.7);
  font-weight: 900;
  text-transform: uppercase;
  text-shadow: 0px 5px 10px rgba(0, 0, 0, 0.7);
  color: #fff;
  mix-blend-mode: overlay;
`;

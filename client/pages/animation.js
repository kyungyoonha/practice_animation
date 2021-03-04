import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import { Container } from '../components/Layout';
import { TextEffect, TextHover } from '../components/Animation';

const Animation = () => {
  return (
    <>
      <Header />
      <Contents>
        <TextHover />
        <TextEffect />
      </Contents>
    </>
  );
};

export default Animation;

const Contents = styled(Container)``;

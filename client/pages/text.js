import React from 'react';

import Header from '../components/Header';
import { Container } from '../components/Layout';
import { TextEffect, TextHover, TextTransparent } from '../components/Animation';

const Text = () => {
  return (
    <>
      <Header />
      <Container>
        <TextTransparent />
        <TextEffect />
        <TextHover />
      </Container>
    </>
  );
};

export default Text;

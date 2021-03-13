import React from 'react';

import Header from '../components/Header';
import { Container } from '../components/Layout';
import { TextEffect, TextHover, TextTransparent, TextGradient } from '../components/Animation';

const Text = () => {
  return (
    <>
      <Header />
      <Container>
        <TextGradient />
        <TextTransparent />
        <TextEffect />
        <TextHover />
      </Container>
    </>
  );
};

export default Text;

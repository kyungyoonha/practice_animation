import React from 'react';

import Header from '../components/Header';
import { Container } from '../components/Layout';
import { TextEffect, TextHover, TextTransparent, TextGradient, TextBoarder, TextShadow } from '../components/Text';

const Text = () => {
  return (
    <>
      <Header />
      <Container>
        <TextShadow />
        <TextBoarder />
        <TextGradient />
        <TextTransparent />
        <TextEffect />
        <TextHover />
      </Container>
    </>
  );
};

export default Text;

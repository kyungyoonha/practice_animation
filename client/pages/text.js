import React from 'react';

import Header from '../components/Header';
import { Container } from '../components/Layout';
import {
  TextEffect,
  TextHover,
  TextTransparent,
  TextGradient,
  TextBoarder,
  TextShadow,
  LetterSpacing,
} from '../components/Text';

const Text = () => {
  return (
    <>
      <Header />
      <Container>
        <LetterSpacing />
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

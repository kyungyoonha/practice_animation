import React from 'react';

import Header from '../components/Header';
import { Container } from '../components/Layout';
import {
  TextEffect,
  TextHover,
  TextScroll,
  TextGradient,
  TextBoarder,
  TextShadow,
  LetterSpacing,
  TextTransparent,
} from '../components/Text';

const Text = () => {
  return (
    <>
      <Header />
      <Container>
        <TextTransparent />
        <LetterSpacing />
        <TextShadow />
        <TextBoarder />
        <TextGradient />
        <TextScroll />
        <TextEffect />
        <TextHover />
      </Container>
    </>
  );
};

export default Text;

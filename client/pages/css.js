import React from 'react';

import Header from '../components/Header';
import { Container } from '../components/Layout';
import { BackgroundGradient, BackgroundHover, Round } from '../components/Css';

const Css = () => {
  return (
    <>
      <Header />
      <Container>
        <Round />
        <BackgroundHover />
        <BackgroundGradient />
      </Container>
    </>
  );
};

export default Css;

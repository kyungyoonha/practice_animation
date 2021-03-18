import React from 'react';

import Header from '../components/Header';
import { Container } from '../components/Layout';
import { BackgroundGradient } from '../components/Css';

const Css = () => {
  return (
    <>
      <Header />
      <Container>
        <BackgroundGradient />
      </Container>
    </>
  );
};

export default Css;

import React from 'react';

import Header from '../components/Header';
import { Container, Row } from '../components/Layout';
import { BackgroundGradient, BackgroundHover, Round, Menu } from '../components/Css';

const Css = () => {
  return (
    <>
      <Header />
      <Container>
        <Menu />
        <Round />
        <BackgroundHover />
        <BackgroundGradient />
      </Container>
    </>
  );
};

export default Css;

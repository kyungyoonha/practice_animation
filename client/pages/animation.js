import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import { Container } from '../components/Layout';
import { TextEffect, TextHover, Background, SkewBook, Rain, ContentChange } from '../components/Animation';

const Animation = () => {
  return (
    <>
      <Header />
      <Contents>
        <ContentChange />
        <Rain />
        <SkewBook />
        <Background active={true} />
        <TextHover />
        <TextEffect />
      </Contents>
    </>
  );
};

export default Animation;

const Contents = styled(Container)``;

/**
 ### 스크롤 이벤트 적용하기
 - 특정 위치가되면 active 를prop로 넘겨줌
 - 자식 컴포넌트는 active될시 클래스 명을 변경
 - active일때 애니메이션 활성화되도록 설정
 */

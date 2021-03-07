import React from 'react';
import styled from 'styled-components';

const ContentChange = () => {
  return (
    <Wrapper>
      <StyledContent>Hello. </StyledContent>
    </Wrapper>
  );
};

export default ContentChange;

const Wrapper = styled.div`
  width: 100%;
  height: 700px;
  position: relative;
  margin-top: 30px;
  background-image: linear-gradient(to bottom right, #9200e8, #290040);

  @keyframes content-change {
    0% {
      content: 'YOON';
    }
    20% {
      content: 'JACK';
    }
    40% {
      content: 'PHILLIP';
    }
    60% {
      content: 'CATE';
    }
    80% {
      content: 'CACHY';
    }
    100% {
      content: 'BOB';
    }
  }
`;

const StyledContent = styled.div`
  padding: 300px 250px;
  color: #fff;
  font-size: 4rem;
  font-weight: 700;

  &::after {
    content: 'HTML';
    animation: content-change 3s linear infinite;
  }
`;

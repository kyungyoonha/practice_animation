import React from 'react';
import styled from 'styled-components';

const TextHover = () => {
  const text = 'Excelent Animation';
  return (
    <Wrapper>
      <TextBox content2={text}>{text}</TextBox>
    </Wrapper>
  );
};

export default TextHover;

const Wrapper = styled.div`
  width: 100%;
  height: 700px;
  background: #ffec3a;
  margin-top: 30px;
  position: relative;
`;

const TextBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 8rem;
  font-family: verdana;
  text-align: center;
  font-weight: 700;
  color: #f00;
  text-shadow: 0 5px 0 rgba(0, 0, 0, 0.1), 0 10px 40px rgba(0, 0, 0, 0.2), 0 20px 30px rgba(0, 0, 0, 0.2),
    0 30px 20px rgba(0, 0, 0, 0.2);
  transition: 0.5s;

  &::before {
    content: ${(props) => JSON.stringify(props.content2)};
    position: absolute;
    top: -5px;
    left: 0;
    color: #fec106;
    text-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);
    transition: 0.5s;
  }
  &::after {
    content: ${(props) => JSON.stringify(props.content2)};
    position: absolute;
    top: -10px;
    left: 0;
    color: #fff;
    text-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);
    transition: 0.5s;
  }

  &:hover:before {
    top: -10px;
    left: 10px;
  }

  &:hover:after {
    top: -20px;
    left: 20px;
  }

  &:hover {
    text-shadow: -10px 10px 0 rgba(0, 0, 0, 0.1), 0 10px 40px rgba(0, 0, 0, 0.5), 10px 20px 30px rgba(0, 0, 0, 0.8),
      0 30px 20px rgba(0, 0, 0, 0.2);
  }
`;

/*
### 가상 선택자 :before / :after  
- HTML 문서에 정보로 포함되지 않은 요소를 CSS에서 새롭게 생성(content속성)
- ::before => 요소의 콘텐츠 시작부분에 생성된 컨텐츠를 추가한다.
- ::after => 요소의 콘텐츠 끝 부분에 생성된 컨텐츠를 추가한다.
- : 과 :: 차이는 크로스브라우징 차이 (::쓰는게 좋다) 

### 겹치는 텍스트
- before 과 after, 그림자를 이용하면 쉽게 4개 겹치는 텍스트를 만들 수 있음
*/

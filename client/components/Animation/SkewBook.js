import React from 'react';
import styled from 'styled-components';

const SkewBook = () => {
  return (
    <Wrapper>
      <StyledBook>
        <h1>Lorem ipsum</h1>
        <p>
          Voluptate laboris ut sint do minim. Duis veniam in nostrud aliqua dolore et. Nostrud exercitation et
          reprehenderit pariatur incididunt esse irure. Occaecat pariatur aute aliqua culpa nostrud exercitation aliqua
          ipsum non anim laboris do eiusmod. Reprehenderit magna in sit incididunt deserunt pariatur quis proident sunt
          pariatur ipsum. Deserunt mollit cupidatat adipisicing fugiat sint. Culpa magna exercitation aliqua
          exercitation aute ut duis ea occaecat nisi irure quis incididunt dolor. Laborum est nulla voluptate cupidatat
          ea est dolore sit nulla consectetur ullamco cupidatat excepteur. Et sunt laboris cupidatat veniam ullamco et
          elit ea ipsum enim. <br />
          <br />
          Laborum ullamco dolor pariatur est culpa tempor voluptate magna dolor id qui excepteur. Sint commodo consequat
          eiusmod fugiat sint quis culpa labore id non velit ex labore dolore. Veniam ut et duis sit qui amet minim sint
          exercitation in cupidatat ipsum irure. Proident voluptate eu reprehenderit culpa occaecat nisi sunt duis. Ut
          commodo tempor anim tempor aliqua et ea laboris consectetur laboris id consectetur esse. Ad voluptate anim
          adipisicing mollit esse amet dolore consectetur Lorem ad mollit aliqua. Ut elit fugiat do fugiat cupidatat.
          Veniam commodo reprehenderit deserunt pariatur reprehenderit irure laborum esse officia.
        </p>
      </StyledBook>
    </Wrapper>
  );
};

export default SkewBook;

const Wrapper = styled.div`
  width: 100%;
  height: 900px;
  margin-top: 30px;
  background: #000;
  position: relative;
`;

const StyledBook = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-45deg) skewX(10deg) scale(0.9);
  background: #fff;
  padding: 30px 30px 60px;
  border-left: 20px solid #f00;
  font-size: 1rem;
  transition: 0.5s;

  h1 {
    text-align: center;
    font-weight: 700;
    margin-bottom: 10px;
    opacity: 0.6;
  }

  &::before {
    content: '';
    position: absolute;
    background: #83170c;
    width: 30px;
    height: 100%;
    transform: skewY(-45deg);
    top: 15px;
    left: -50px;
  }

  &::after {
    content: '';
    position: absolute;
    background: #aeaeae;
    width: 103.4%;
    height: 30px;
    transform: skewX(-45deg);
    bottom: -29px;
    left: -35px;
  }

  &:hover {
    transform: translate(-50%, -50%) rotate(0deg) skewX(0) scale(0.9);
  }
`;

/*
### 책 모양 만들기
- transform 옵션중 rotate / skew / scale을 이용하여 만든다.


*/

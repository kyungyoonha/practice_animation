import React from 'react';
import styled from 'styled-components';

const TextEffect = () => {
  const word = 'ANIMATION';
  return (
    <Wrapper>
      <div className="box">
        {word.split('').map((text, i) => (
          <AnimationLi num={i}>{text}</AnimationLi>
        ))}
      </div>
    </Wrapper>
  );
};

export default React.memo(TextEffect);

const Wrapper = styled.div`
  width: 100%;
  height: 700px;
  background: #000;
  position: relative;
  margin-top: 30px;

  .box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) skewY(-8deg);
    background: red;
    border: 5px solid #fff;
    overflow: hidden;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  @keyframes Animation {
    0% {
      transform: translateY(-100px) rotateY(0deg);
    }
    20% {
      transform: translateY(0px) rotateY(360deg);
    }
    40% {
      transform: translateY(-10px) rotateY(360deg);
    }
    50% {
      transform: translateY(0px) rotateY(360deg);
    }
    50% {
      transform: translateY(-10px) rotateY(360deg);
    }
    60% {
      transform: translateY(0px) rotateY(360deg);
    }
    60% {
      transform: translateY(-10px) rotateY(360deg);
    }
    70% {
      transform: translateY(0px) rotateY(360deg);
    }

    100% {
      transform: translateY(100px) rotateY(720deg);
    }
  }
`;

const AnimationLi = styled.li`
  margin: 10px;
  font-size: 70px;
  color: #fff;
  font-weight: 900;
  text-align: center;
  position: relative;
  animation: Animation 3s infinite linear;
  animation-delay: ${(props) => 0.2 * props.num + 's'};
`;

/*
### 평행사변형 만들기
- transform: translate(-50%, -50%) skewY(-8deg);

### li 간격 동일하게 만들기
- 부모의 width를주지말고 li의 마진 값으로 간격 조정해줄것

### 글자회전 효과
```js```
@keyframes Animation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
*/

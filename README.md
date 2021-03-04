### 평행사변형 만들기
- TextEffect.js
- transform: translate(-50%, -50%) skewY(-8deg);

### li 간격 동일하게 만들기
- TextEffect.js
- 부모의 width를주지말고 li의 마진 값으로 간격 조정해줄것

### 글자회전 효과
- TextEffect.js
```js```
@keyframes Animation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }


  ### 가상 선택자 :before / :after  
  - TextHover.js
- HTML 문서에 정보로 포함되지 않은 요소를 CSS에서 새롭게 생성(content속성)
- ::before => 요소의 콘텐츠 시작부분에 생성된 컨텐츠를 추가한다.
- ::after => 요소의 콘텐츠 끝 부분에 생성된 컨텐츠를 추가한다.
- : 과 :: 차이는 크로스브라우징 차이 (::쓰는게 좋다) 

### 겹치는 텍스트
- TextHover.js
- before 과 after, 그림자를 이용하면 쉽게 4개 겹치는 텍스트를 만들 수 있음
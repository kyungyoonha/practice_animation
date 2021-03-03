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
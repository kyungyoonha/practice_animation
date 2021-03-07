import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const colors = ['#7babbc', '#b0aabe', '#c8b9cb', '#e6c1cc', '#f1dbd4'];

const Background = (/*{ active = false }*/) => {
  const [active, setActive] = useState(false);
  const onClick = () => {
    setActive(!active);
  };
  return (
    <Wrapper onClick={onClick}>
      {colors.map((color, idx) => (
        <Mask key={color} color={color} idx={idx} length={colors.length} active={active} />
      ))}
      <div className="background">
        <h1>OVERLAP BACKGROUND</h1>
        <h3>배경으로 강조하는 상품 이미지</h3>
        <img
          src="https://user-images.githubusercontent.com/29701385/110111211-51554600-7df3-11eb-8274-34dd48467403.png"
          alt=""
        />
        <div className="indicator">Animation {active ? 'ON' : 'OFF'}</div>
      </div>
    </Wrapper>
  );
};

Background.propTypes = {
  active: PropTypes.string,
};

export default React.memo(Background);

const Wrapper = styled.div`
  margin-top: 30px;
  width: 100%;
  height: 800px;
  position: relative;
  overflow: hidden;
  background: #000;
  color: #fff;

  .background {
    height: 100%;
    padding: 20px;
    text-align: center;
    position: relative;
    background: none;
    z-index: 100;
  }

  h1 {
    margin-top: 30px;
    font-family: 'NotoB';
    font-size: 50px;
    font-weight: 700;
  }

  h3 {
    font-family: 'NotoR';
    font-size: 24px;
  }

  img {
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
  }

  .indicator {
    position: absolute;
    bottom: 10px;
    left: 10px;
    color: #fff;
  }

  @keyframes Animation_background {
    0% {
      transform: translateX(0px);
    }

    100% {
      transform: translateX(100%);
    }
  }
`;

const Mask = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: ${(props) => props.length - props.idx};
  background: ${(props) => props.color};
  animation: Animation_background 1s forwards linear ${(props) => (props.active ? 'running' : 'paused')};
  animation-delay: ${(props) => `${props.idx * 1}s`};
`;

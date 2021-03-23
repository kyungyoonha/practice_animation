import React, { useState } from 'react';
import styled from 'styled-components';
import { WrapperBox } from '../Layout';

const Menu = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const onClickMenu = () => {
    console.log('?');
    setOpenMenu(!openMenu);
  };

  console.log(openMenu);
  return (
    <WrapperBox>
      <Box className={openMenu ? 'active' : ''} onClick={onClickMenu}>
        <div className="burger">
          <i className="fas fa-bars"></i>
        </div>
        <div className="close">
          <i className="fas fa-times"></i>
        </div>
      </Box>
      <ClickInfo>{openMenu ? '메뉴 클릭중' : '메뉴 닫기중'}</ClickInfo>
    </WrapperBox>
  );
};

export default Menu;

const ClickInfo = styled.div`
  position: absolute;
  bottom: 30px;
  left: 30px;
  color: yellow;
`;

const Box = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  width: 100px;
  height: 100px;
  line-height: 92px;
  border: 4px solid yellow;
  border-radius: 50%;
  font-size: 4rem;
  background: #000;
  text-align: center;
  overflow: hidden;

  .burger {
    color: yellow;
    transition: 0.3s;
  }

  .close {
    background: yellow;
    color: #000;
    transition: 0.3s;
  }

  &.active {
    .burger {
      transform: translateY(-100%);
    }

    .close {
      transform: translateY(-100%);
    }
  }
`;

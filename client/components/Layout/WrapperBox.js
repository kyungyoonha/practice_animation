import React from 'react';
import styled from 'styled-components';

const WrapperBox = ({ children, ...props }) => {
  return <Wrapper {...props}>{children}</Wrapper>;
};

export default React.memo(WrapperBox);

const Wrapper = styled.div`
  position: relative;
  margin-top: 30px;
  width: ${(props) => (props.width ? props.width : '100%')};
  height: ${(props) => (props.height ? props.height : '700px')};
  line-height: ${(props) => (props.height ? props.height : '700px')};
  background: ${(props) => (props.background ? props.background : '#000')};
`;

import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

import { Input } from '../components/Form';
import { Container } from '../components/Layout';

const Signup = () => {
  const [inputs, setInputs] = useState({});

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  }, []);
  return (
    <Container>
      <Form>
        <h1>로그인</h1>
        <Input
          label="아이디"
          name="id"
          value={inputs.id || ''}
          placeholder="아이디를 입력해주세요"
          required
          onChange={onChange}
        />

        <Input
          label="비밀번호"
          name="pw"
          type="password"
          value={inputs.pw || ''}
          placeholder="패스워드를 입력해주세요"
          required
          onChange={onChange}
        />
      </Form>
    </Container>
  );
};

export default Signup;

const Form = styled.form`
  margin-top: 80px;
  border: 1px solid ${(props) => props.theme.gray[0]};
  border-radius: 1%;
  height: 700px;
  padding: 80px 20px;

  h1 {
    font-weight: 900;
    text-align: center;
    margin-bottom: 30px;
  }

  @media (min-width: 768px) {
    padding: 80 50px;
  }

  @media (min-width: 992px) {
    padding: 80px 100px;
  }
`;

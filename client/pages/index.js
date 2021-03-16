import React from 'react';
import Header from '../components/Header';
import axios from 'axios';
import { END } from 'redux-saga';
import styled from 'styled-components';

import wrapper from '../store/configureStore';
import { Container } from '../components/Layout';
import { LOAD_MY_INFO_REQUEST } from '../reducers/userReducer';
import { Card, CardGlass } from '../components/Animation';

const Home = () => {
  return (
    <>
      <Header />
      <Contents>
        <Card className="card-list" />
        <Card className="card-list" />
      </Contents>
      <ContentsBlack>
        <CardGlass className="card-list" />
      </ContentsBlack>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }

  context.store.dispatch({
    type: LOAD_MY_INFO_REQUEST,
  });

  context.store.dispatch(END);

  await context.store.sagaTask.toPromise();
});

export default Home;

const Contents = styled(Container)`
  margin-top: 30px;
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  .card-list {
    margin-right: 30px;
    margin-bottom: 20px;
  }
`;

const ContentsBlack = styled(Contents)`
  background: #000;
  margin-top: 80px;
`;

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import NavBar from '../NavBar';

const ErrorPageContainer = styled.div`
  margin: 0;
  width: 100%;
`

const ErrorPageContent = styled.div`
  height: 91vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ButtonGoBackFeed = styled.button`
  cursor: pointer;
  padding: 10px;
  border-radius: 15px;
  background-color: cadetblue;
  border: none;
  position: relative;
  margin-bottom: 100px;

  :hover {
    font-weight: bolder;
  }
`

const Title = styled.h2`
  color: darkorange;
`

const CatGif404 = styled.img`
  width: 40%;
`

function ErrorPage() {
  return (
    <ErrorPageContainer>

      <NavBar />

      <ErrorPageContent>

          <Title>Erro 404</Title>

          <p>Oops! Parece que o que você procurava já não está mais aqui...</p>

          <CatGif404 src='https://hakcess.com/assets/404.gif' />

          <Link to={'/'}>
            <ButtonGoBackFeed>Voltar para o Feed</ButtonGoBackFeed>
          </Link>

      </ErrorPageContent>

    </ErrorPageContainer>
  );
}

export default ErrorPage;
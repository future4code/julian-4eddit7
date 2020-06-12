import React from 'react';
import { Link } from 'react-router-dom';
import { ErrorPageContainer,
         ErrorPageContent,
         ButtonGoBackFeed,
         Title,
         CatGif404 } from './style';

import NavBar from '../NavBar';

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
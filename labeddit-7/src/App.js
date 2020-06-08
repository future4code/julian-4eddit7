import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import FeedPage from './components/FeedPage';
import PostPage from './components/PostPage';
import ErrorPage from './components/ErrorPage';

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`


function App() {
  return (
    <AppContainer>

      <BrowserRouter>
      
        <Switch>

          <Route exact path='/login'>
            <LoginPage />
          </Route>

          <Route exact path='/signup'>
            <SignUpPage />
          </Route>

          <Route exact path='/'>
            <FeedPage />
          </Route>

          <Route exact path='/posts'>
            <PostPage />
          </Route>

          <Route path='/'>
            <ErrorPage />
          </Route>

        </Switch>
      
      </BrowserRouter>

    </AppContainer>
  );
}

export default App;

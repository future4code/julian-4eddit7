import React, { useEffect } from 'react';
import styled from 'styled-components';

import FormItem from '../FormItem';
import CardPost from '../CardPost';
import NavBar from '../NavBar';
import { useHistory } from "react-router-dom";

const FeedPageContainer = styled.div`
  margin: 0px;
  width: 100%;
  height: 100vh;
`

const FeedPageContent = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  background-color: aliceblue;
`

const FeedPostContent = styled.div`
  width: 80%;
  height: auto;
`

function FeedPage() {
  const history = useHistory()

  useEffect(() => {

    const token = localStorage.getItem("token");

    if (token === null) {
      history.push("/login");
    }
  }, [history]);


  return (
    <FeedPageContainer>

      <NavBar />

      <FeedPageContent>

        <FeedPostContent>

          <h2>Feed</h2>

          <FormItem />

          <CardPost />

        </FeedPostContent>

      </FeedPageContent>

    </FeedPageContainer>
  );
}

export default FeedPage;
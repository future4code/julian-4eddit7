import React, { useEffect } from 'react';

import FormItem from '../FormItem';
import CardPost from '../CardPost';
import NavBar from '../NavBar';
import { useHistory } from "react-router-dom";

import { FeedPageContainer,
         FeedPageContent,
         FeedPostContent } from './style';

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
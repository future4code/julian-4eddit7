import React from 'react';
import { Link } from 'react-router-dom';
import FormItem from '../FormItem';
import CardPost from '../CardPost';

function FeedPage() {
  return (
    <div>

      <Link to={'/posts'}>
      <button>Todos os posts</button>
      </Link>

      <h3>Feed</h3>
      <FormItem />
      <CardPost />
    </div>
  );
}

export default FeedPage;
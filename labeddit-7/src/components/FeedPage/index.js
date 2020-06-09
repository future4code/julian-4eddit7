import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import FormItem from '../FormItem';
import CardPost from '../CardPost';
import { useHistory } from "react-router-dom"




function FeedPage() {
  const history = useHistory()

  useEffect(() => {

    const token = localStorage.getItem("token");

    if (token === null) {
      history.push("/login");
    }
  }, [history]);


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
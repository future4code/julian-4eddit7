import React, {useEffect} from 'react';
import CardPost from '../CardPost';
import { useHistory } from "react-router-dom"

function PostPage() {
  const history = useHistory()

  useEffect(() => {

    const token = localStorage.getItem("token");

    if (token === null) {
      history.push("/login");
    }
  }, [history]);


  return (
    <div>
     <h3>Todos os posts</h3>
     <CardPost />
    </div>
  );
}

export default PostPage;
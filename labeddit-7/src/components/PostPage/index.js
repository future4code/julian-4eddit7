import React, { useEffect } from 'react';
import CardPost from '../CardPost';
import { useHistory, Link } from "react-router-dom"

import NavBar from '../NavBar';

import { PostPageContainer,
         PostPageContent,
         Button } from './style';

function PostPage() {
  const history = useHistory()

  useEffect(() => {

    const token = localStorage.getItem("token");

    if (token === null) {
      history.push("/login");
    }
  }, [history]);

  


  return (
    <PostPageContainer>
      <NavBar />
      <PostPageContent>
        <h3>Todos os posts</h3>
        <CardPost />
      </PostPageContent>

      <Link to={'/'}>
        <Button>Voltar para o feed</Button>
      </Link>

    </PostPageContainer>
  );
}

export default PostPage;
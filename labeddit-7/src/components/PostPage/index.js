import React, { useEffect } from 'react';
import styled from 'styled-components';
import CardPost from '../CardPost';
import { useHistory, Link } from "react-router-dom"
import NavBar from '../NavBar';

const PostPageContainer = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;

`

const PostPageContent = styled.div`

`

const Button = styled.button`
  border-radius: 15px;
  margin: 10px;
  border: none;
  background-color: cadetblue;
  padding: 10px;

  :hover {
    cursor: pointer;
  }
`

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
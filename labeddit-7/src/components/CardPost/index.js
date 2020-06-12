import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import { Paper } from '@material-ui/core'
import axios from 'axios'
import {
  CardPostContainer,
  CardPostContent,
  Text,
  IdUser,
  IconUser,
  UserName,
  Reactions,
  CommentSection,
  KarmaSection,
  UpVoteIcon,
  DownVoteIcon,
  Title,
  SendComment,
  Input,
  Button
} from './style';


const CaixaDeComentarios = styled(Paper)`
margin-top: 20px;
`

function FeedPage() {

  const [posts, setPosts] = useState([])
  const [comentarios, setComentarios] = useState("")
  const [id, setId] = useState("")
  const [comment, setComment] = useState([])


  // AXIOS PEGAR POSTAGENS
  useEffect(() => {
      const token = localStorage.getItem("token")

      axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts', {
        headers: {
          "Content-Type": "application/json",
          Authorization: token
        }
      }).then((response) => {
        setPosts(response.data.posts)
      }).catch(error => {
        console.log(error.response)
      })

  }, []);

  const inputDoComentario = (event) => {
    setComentarios(event.target.value)
  }

  // AXIOS ENVIAR COMENTARIO
  const enviarComentario = () => {

    const body = {
      text: comentarios
    }

    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${localStorage.getItem("id")}/comment`, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token")
      }
    }).then((response) => {
      console.log(response.data)
      console.log(localStorage.getItem("id"))
    }).catch(error => {
      console.log(error.response)
      console.log(`${id}`)
    })
  }

  // AXIOS PEGAR COMENTARIOS
  const pegarComentarios = () => {

    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${localStorage.getItem("id")}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token")
      }
    }).then((response) => {
      setComment(response.data.post.comments)
    }).catch(error => {
      console.log(error.response)
    })
  }


  return (
    <>
      {posts.map(function (post) {
        return (
          <>
            <CardPostContainer>
              <CardPostContent>
                <IdUser>
                  <IconUser src='https://images2.imgbox.com/59/ef/lwVsBQOW_o.png' />
                  <UserName>{post.username}</UserName>
                </IdUser>

                <Title>{post.title}</Title>
                <Text>{post.text}</Text>

                <Reactions>
                  <KarmaSection>
                    <UpVoteIcon><img src="https://images2.imgbox.com/52/c5/Eu59V4Kx_o.png" alt="curtida" /></UpVoteIcon>
                    <DownVoteIcon><img src="https://images2.imgbox.com/d3/c8/XT3Iik1e_o.png" alt="descurtida" /></DownVoteIcon>
                  </KarmaSection>

                  <CommentSection>
                    <h5 onClick={() => (localStorage.setItem("id", post.id), pegarComentarios())}> {post.id.commentsCount} Comentarios</h5>
                  </CommentSection>
                </Reactions>

                <SendComment>
                  <Input onChange={inputDoComentario} value={comentarios} id={Date.now()} name="comentarios" placeholder="Publique um comentario" />
                  <Button onClick={() => (localStorage.getItem("id", post.id), enviarComentario())}>enviar</Button>
                </SendComment>

                <CaixaDeComentarios variant="outlined">
                  {comment.map(function (post) {
                    return <ul><li>{post.text}</li></ul>
                  })}
                </CaixaDeComentarios>
                {/* <span>{post.id}</span> */}
              </CardPostContent>
            </CardPostContainer>
          </>
        )
      })}
    </>
  );
}

export default FeedPage;
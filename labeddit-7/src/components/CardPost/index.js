import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CardPostContainer,
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
         Button } from './style';


function FeedPage() {
  const [posts, setPosts] = useState([])
  const [comentarios, setComentarios] = useState("")

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

  
  const enviarComentario = () => {  

    const body = {
        text: comentarios
      }
         
    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${IdUser}/comment`, body,{
      headers: {
       "Content-Type": "application/json",
        Authorization: localStorage.getItem("token")
      }
    }).then((response) => {
        console.log('id comentario', response.data)
    }).catch(error => {
        console.log(error.response)
    })
  }

  const votePost = (id, vote) => {
    axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${IdUser}/vote`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token")
      }
    }).then((response) => {
      console.log('Vote post', response.data)
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
                  <IconUser src='https://images2.imgbox.com/59/ef/lwVsBQOW_o.png'/>
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
                    <h5>{post.commentsCount} Comentarios</h5>
                  </CommentSection>
                </Reactions>
                <SendComment>
                <Input onChange={inputDoComentario} value={comentarios} placeholder="publique um comentario" ></Input>  
                <Button onClick={3n}>enviar</Button>         
                </SendComment>
              </CardPostContent>
            </CardPostContainer>
          </>
        )
      })}
    </>
  );
}

export default FeedPage;
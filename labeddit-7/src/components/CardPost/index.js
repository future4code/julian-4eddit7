import React, { useEffect, useState } from 'react';
import axios from 'axios'
import styled from 'styled-components';


const CardPostContainer = styled.div`
  border: 1px solid #DEDEDE;
  width: 70%;
  padding: 20px;
  background-color: white;
  margin-bottom: 20px;
`

const CardPostContent = styled.div`
    display: flex;
    flex-direction: column;
`

const Text = styled.p`
  border-radius: 15px;
  border: 1px solid #DEDEDE;
  height: auto;
  background-color: #f5f5f5;
  font-size: 15px;
`

const IdUser = styled.div`
  display: flex;
  flex-direction: row;
`

const IconUser = styled.img`
  width: 60px;
`

const UserName = styled.h5`
  color: darkorange;
  margin-left: 10px;
`

const Reactions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const CommentSection = styled.div`
  display: flex;
  align-self: flex-end;

  :hover {
    cursor: pointer;
  }
`

const KarmaSection = styled.div`
  display: flex;
  flex-direction: row;
`

const UpVoteIcon = styled.p`
  margin-left: 20px;

  :hover {
    cursor: pointer;
    font-weight: bolder;
  }
`

const DownVoteIcon = styled.p`
  margin-left: 20px;

  :hover {
    cursor: pointer;
    font-weight: bolder;
  }`

const Title = styled.h4`
`

const SendComentario = styled.div` 
  display: flex;
  flex-wrap: nowrap;


  `
 const Input = styled.input`
  width: 89%;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  border-bottom: 1px grey solid;
 `
 const Button = styled.button`
  border: none;
  background-color: cadetblue;
  padding: 8px;
  font-size: 12px;
  border-radius: 10px;
  color: white;
  font-weight: bolder;
  margin-left: 15px;`
  


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

  
  const enviarcomentario = () => {  

    const body = {
        text: comentarios
      }
         
    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/AzKavLnvIaaQWBwLN4uU/comment`, body,{
      headers: {
      "Content-Type": "application/json",
        Authorization: localStorage.getItem("token")
      }
    }).then((response) => {
        console.log(response)
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
                <SendComentario>
                <Input onChange={inputDoComentario} value={comentarios} placeholder="publique um comentario" ></Input>  
                <Button onClick={enviarcomentario}>enviar</Button>         
                </SendComentario>
              </CardPostContent>
            </CardPostContainer>
          </>
        )
      })}
    </>
  );
}

export default FeedPage;
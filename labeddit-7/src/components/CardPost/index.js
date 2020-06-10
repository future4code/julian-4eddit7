import React, {useEffect, useState} from 'react';
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
  margin-right: 20px;
  font-size: 15px;
`

const IdUser = styled.div`
  display: flex;
  flex-direction: row;
`

const IconUser = styled.img`
  width: 60px;
  /*border-radius: 100px;
*/`

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
  }
`

  function FeedPage() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
  const token = localStorage.getItem("token")

  axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts', {
    headers: { "Content-Type": "application/json",
        Authorization: token
       } 
}).then((response) => {
    console.log(response.data.posts)
    setPosts(response.data.posts)
}).catch(error => {
    console.log(error.response)
}) }, []);


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
        
        <Text>{post.text}</Text>
        
        <Reactions>
          <KarmaSection>
            <UpVoteIcon><img src="https://images2.imgbox.com/52/c5/Eu59V4Kx_o.png" /></UpVoteIcon>
            <DownVoteIcon><img src="https://images2.imgbox.com/d3/c8/XT3Iik1e_o.png" /></DownVoteIcon>
          </KarmaSection>

          <CommentSection>
            <h5>{post.commentsCount} Comentarios</h5>
          </CommentSection>
        </Reactions>
        </CardPostContent>
        </CardPostContainer>
        </>
          )
      })}
    </>
  );
}

export default FeedPage;
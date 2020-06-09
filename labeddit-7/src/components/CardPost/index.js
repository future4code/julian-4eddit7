import React from 'react';
import styled from 'styled-components';

const CardPostContainer = styled.div`
  border: 1px solid #DEDEDE;
  width: 70%;
  padding: 20px;
  background-color: white;
  margin-bottom: 10px;
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
  width: 10px;
  border-radius: 100px;
`

const UserName = styled.h5`
  color: darkorange;
  margin-left: 15px;
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
    return (
      <CardPostContainer>

      <CardPostContent>

        <IdUser>
          <IconUser src='https://picsum.photos/id/237/20/30' />
          <UserName>nome.usuario</UserName>
        </IdUser>
        
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
        
        <Reactions>
          <KarmaSection>
            <UpVoteIcon>^</UpVoteIcon>
            <DownVoteIcon>v</DownVoteIcon>
          </KarmaSection>

          <CommentSection>
            <h5>Comentarios</h5>
          </CommentSection>
        </Reactions>

      </CardPostContent>

    </CardPostContainer>
  );
}

export default FeedPage;
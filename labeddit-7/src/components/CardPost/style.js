import styled from 'styled-components';

export const CardPostContainer = styled.div`
  border: 1px solid #DEDEDE;
  width: 70%;
  padding: 20px;
  background-color: white;
  margin-bottom: 20px;
`

export const CardPostContent = styled.div`
    display: flex;
    flex-direction: column;
`

export const Text = styled.p`
  border-radius: 15px;
  border: 1px solid #DEDEDE;
  height: auto;
  background-color: #f5f5f5;
  font-size: 15px;
`

export const IdUser = styled.div`
  display: flex;
  flex-direction: row;
`

export const IconUser = styled.img`
  width: 60px;
`

export const UserName = styled.h5`
  color: darkorange;
  margin-left: 10px;
`

export const Reactions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const CommentSection = styled.div`
  display: flex;
  align-self: flex-end;

  :hover {
    cursor: pointer;
  }
`

export const KarmaSection = styled.div`
  display: flex;
  flex-direction: row;
`

export const UpVoteIcon = styled.p`
  margin-left: 20px;

  :hover {
    cursor: pointer;
    font-weight: bolder;
  }
`

export const DownVoteIcon = styled.p`
  margin-left: 20px;

  :hover {
    cursor: pointer;
    font-weight: bolder;
  }`

export const Title = styled.h4`
`

export const SendComment = styled.div` 
  display: flex;
  flex-wrap: nowrap;
`
 export const Input = styled.input`
  width: 89%;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  border-bottom: 1px grey solid;
 `
 export const Button = styled.button`
  border: none;
  background-color: cadetblue;
  padding: 8px;
  font-size: 12px;
  border-radius: 10px;
  color: white;
  font-weight: bolder;
  margin-left: 15px;
`
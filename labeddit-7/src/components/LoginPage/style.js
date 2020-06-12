import styled from 'styled-components'

export const LoginPageContainer = styled.div`
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  background-color: #ceddde;
`

export const LoginPageContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border: 1px outset #DEDEDE;
  padding: 20px;
  border-radius: 25px;
  flex-wrap: wrap;
  width: 50%;
  height: 70vh;
  margin-top: 12%;
  margin-left: 20%;
  background: rgba(0, 0, 0, 0.1);
`

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const Input = styled.input`
  padding: 10px;
  border-radius: 25px;
  border: 1px solid grey;
  margin-top: 10px;
  margin-bottom: 10px;
`

export const LoginButton = styled.button`
  padding: 10px;
  border: 1px solid cadetblue;
  color: cadetblue;
  border-radius: 25px;
  margin-top: 10px;
  margin-bottom: 10px;

  :hover {
    font-weight: bolder;
    color: white;
    background-color: cadetblue;
    cursor: pointer;
  }
`

export const SignUpButton = styled.button`
  padding: 10px;
  font-weight: bolder;
  color: white;
  background-color: cadetblue;  
  border-radius: 25px;
  border: none;
  
  :hover {
    cursor: pointer;
    background-color: white;
    border: 1px solid cadetblue;
    color: cadetblue;
  }
`

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  height: 100vh;
  background: url('https://png.pngtree.com/thumb_back/fw800/background/20190223/ourmid/pngtree-full-fantasy-night-aurora-background-nightauroralight-backgroundhand-paintedstarry-image_68228.jpg');
  background-size: cover;
`

export const LogoLabeddit = styled.img`
  width: 40%;
`

export const Title = styled.h2`
  color: cadetblue;
`
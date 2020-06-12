import styled from 'styled-components';

export const FormItemContainer = styled.div`
  border: 1px solid #DEDEDE;
  width: 70%;
  padding: 20px;
  background-color: white;
  margin-bottom: 30px;
  display: flex;
`

export const FormItemContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const InputText = styled.input`
  border-radius: 15px;
  border: 1px solid #DEDEDE;
  width: 90%;
  height: 50px;
  background-color: #f5f5f5;
  font-size: 15px;
`

export const InputTitle = styled.input`
  border-radius: 15px;
  border: 1px solid #DEDEDE;
  background-color: #f5f5f5;
  font-size: 15px;
  width: 90%;
  height: 20px;
  margin-bottom: 10px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  padding-right: 30px;
`

export const IconUser = styled.img`
  padding-right: 30px;
  padding-left: 30px;

`

export const Button = styled.button`
  border: none;
  background-color: cadetblue;
  padding: 10px;
  font-size: 15px;
  border-radius: 10px;
  color: white;
  font-weight: bolder;

  :hover {
    cursor: pointer;
  }
`
import styled from 'styled-components'

export const MyTasksContainer = styled.div`
  display:flex;
  flex-direction:row;

  @media screen and (max-width:576px){
    flex-direction:column;
  }
  
  
`

export const MyTasksFormContainer = styled.div`
  height:100vh;
  background-color: #1a171d;
  
  width:40%;
  display:flex;
  flex-direction:column;
  align-items:center;
  padding-top:30px;
  
  @media screen and (max-width:576px){
    height:65vh;
    width:100%;
  }
  
  
  
`

export const FormContent = styled.form`
 display:flex;
 flex-direction:column;
 align-items:flex-start;
  
 height:50vh;
  margin-top:30px;
 
`
export const TaskInputContainer = styled.div`
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  padding-bottom:50px;
   
 

`

export const FormTitle = styled.h1`
  font-family:'Roboto';
  color:#f3aa4e;
  font-weight:bold;
  text-align:center;
`

export const TaskInput = styled.input`
 height:40px;
 width:350px;
 border:none;
 outline:none;
 border-radius:5px;
 font-size:15px;
`

export const InputLabel = styled.label`
  font-family:'Roboto';
  color:#fff;
  font-weight:bold;
`
export const TaskSelect = styled.select`
   height:40px;
 width:350px;
 border:none;
 outline:none;
 border-radius:5px;
 font-size:15px;
`
export const OptionItem = styled.option``

export const FormButton = styled.button`
  height:45px;
  width:100px;
  border:none;
  outline:none;
  border-radius:5px;
  background-color:#f3aa4e;
  color:#fff;
  font-weight:bold;
  cursor:pointer;
`

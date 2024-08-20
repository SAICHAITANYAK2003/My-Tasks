import styled from 'styled-components'

export const AddedTagsContainer = styled.div`
  background-color: #131213;
  height:100vh;
  width:70%;
  padding-top:30px;
  padding-left:50px;
  @media screen and (max-width:576px){
    width:100%;
  }
`

export const TagsContainer = styled.div``

export const TagsTitle = styled.h1`
  font-family:'Roboto';
  color:#fff;
`
export const TagButtonsUl = styled.ul`
 padding:15px;

 display:flex;
 flex-direction:row;
 justify-content:space-around;
 width:70vh;
 overflow-x:auto;
 border:0.1px solid  #cdd4cf;
 border-radius:10px;

`

export const TagButtonli = styled.li`
  list-style-type:none;
  padding-right:30px;
   
`

export const TagButton = styled.button`
  height:30px;
  border:none;
  width:100px;
  border-radius:20px;
  cursor:pointer;
  border:${props => (props.isActive ? 'none' : '1px solid #f3aa4e')};
  background-color: ${props => (props.isActive ? '#f3aa4e' : 'transparent')};
  color: ${props => (props.isActive ? '#000' : '#f3aa4e')};
   
`

export const TagsAddedList = styled.ul`
 width:80%;
  
 overflow-y:scroll;
 @media screen and (max-width:576px){
     
    width:200px;
  }
  
`

export const AddedTagLi = styled.li`
 list-style-type:none;
 border-bottom:0.1px solid #595858;
 width:100%;
 display:flex;
 flex-direction:row;
 justify-content:space-between;
 align-items:center;
 background-color: #1a171d;
 padding-left:20px;
 padding-right:20px
 
  

`
export const AddedTagTask = styled.p`
  font-family:'Roboto';
  color:#fff;
  font-size:20px;
`
export const AddedTag = styled.p`
  font-family:'Roboto';
  color:#000;
  font-size:15px;
  background-color: #f3aa4e;
  padding:10px;
  font-weight:500;
  border-radius:20px;

`

export const NoTasksFoundContainer = styled.div`
  height:40vh;
  display:flex;
  justify-content:center;
  align-items:center;
`

export const NoTasksFoundTitle = styled.h1`
  font-family:'Roboto';
  color:#fff;
  font-weight:bold;
  text-align:center;
`

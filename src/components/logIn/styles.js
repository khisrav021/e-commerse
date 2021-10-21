import styled from "styled-components";

export const LogInCard = styled.div`
width: 300px;
text-align: center;
color: #45A5FF;
background-color: #EDF6FF;
border-radius: 20px;
margin-left: 38%;
margin-top: 13%;
input{
    padding: 10px;
    background-color: #EDF6FF ;
    color: #45A5FF;
    border-radius: 20px;
    outline: none;
    border: 1px solid #45A5FF;
    ::placeholder{
    transition-duration: 1s;
    color: #45A5FF;
    }
    transition-duration: 1s;
    &:hover{
        background-color: #45A5FF ;
    color: #EDF6FF;
    border: 1px solid #EDF6FF;
        ::placeholder{
        
        color: #EDF6FF;
        }
    }
}
button{
    padding: 10px;
    background-color: #45A5FF ;
    color: #EDF6FF;
    border-radius: 20px;
    border: 1px solid #EDF6FF;
    transition-duration: 1s;
    cursor: pointer;
    &:hover{
    border: 1px solid #45A5FF;
    background-color: #EDF6FF ;
    color: #45A5FF;
    }
}
`
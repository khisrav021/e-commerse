import styled from "styled-components";

export const HistoryCard = styled.div `
margin: 20px;
`

export const SearchDate = styled.div `
form{
    button{
        border: none;
        padding: 13px;
        border-radius: 10px 0 0 10px;
        cursor: pointer;
        transition-duration: 1s;
                background-color: #EFEFEF;
    }
    input{
        border: none;
        padding: 10px;
        border-radius: 0 10px 10px 0;
        transition-duration: 1s;
        outline: none;
                background-color: white;
    }
        &:hover{
            button{
                background-color: white;
            }
            input{
                background-color: #EFEFEF;
            }
        }
}
`

export const HistoryCards = styled.div `
width: 1000px;
margin-top: 40px;
display: flex;
justify-content: space-evenly;
`

export const Card = styled.div `
width: 300px;
background-color: white;
box-shadow: 10px 10px 5px #aaaaaa;
border-radius: 10px;
div{
    img{
        margin: 20px 0;
        margin-left: 80px;
        width: 150px;
    }
}
`

export const DFTexts = styled.div `
display: flex;
justify-content: space-around;
`
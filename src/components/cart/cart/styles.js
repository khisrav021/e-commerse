import styled from "styled-components";

export const CartCard = styled.div`
width: 660px;
margin: 20px;
background-color: white;
border-radius: 10px;
`

export const Card = styled.div`
margin: 15px;
`

export const Title = styled.div`
display: flex;
justify-content: space-evenly;
padding: 10px;
`

export const Carts = styled.div`
display: flex;
justify-content: space-evenly;
border: 2px solid #F3F3F3;
border-radius: 10px;
div{
margin:10px 0 ;
    p{
        padding-top: 10px;
    }
    img{
        width: 50px;
    }
    input{
        width: 90px;
        height: 40px;
        font-size: 30px;
        border: 1px solid #E1E4E7;
        color: #5C5E62;
        outline: none;
        padding: 10px;
    }
    button{
        background-color: white;
        border: 1px solid #D9534D;
        cursor: pointer;
        margin-top: 5px;
        padding: 5px;
        border-radius: 10px;
        transition-duration: 1s;
        &:hover{
            border: 1px solid white;
        }
    }
}
`
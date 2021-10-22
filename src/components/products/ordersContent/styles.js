import styled from "styled-components";

export const OrdersCard = styled.div `margin-left: 20px;
margin-top: 40px;
`


export const Title = styled.div `
display: flex;
div{
    p{
        padding-top: 17px;
        padding-left: 5px;
    }
}
button{
    cursor: pointer;
    border-radius: 10px;
}
.btn2{
    margin-left: 660px;
    button{
    width: 150px;
    height: 40px;
    display: flex;
    margin-left: 5%;
    color: #82888D;
    padding: 10px;
    background-color: #FAFAFA;
    border: 1px solid #F2F2F3;
    p{
        padding:0 5px;
        padding-top: 3px;
    }
    svg{
        width: 20px;
    }}
}
`

export const Text = styled.div `
display: flex;
margin-top: 30px;
h3{
    padding-left: 20px;
    color: #A0A5A8;
    transition-duration: 1s;
    &:hover{
        color: #4AA6FB;
        cursor: pointer;
    }
}
`

export const Titles = styled.div `
display: flex;
justify-content: space-around;
padding: 10px 0;
border-bottom: 1px solid #F8F8F8;
`
export const Product = styled.div `
display: flex;
justify-content: space-around;
padding: 10px 0;
border-bottom: 1px solid #F8F8F8;
.DisplayFlex{
    display: flex;
    img{
        margin-top: 2px;
        margin-right: 5px;
        width: 15px;
    }
}
`

export const Status = styled.div `
/* width: 100px;
height: 25px; */
text-align: center;
/* color: #F4BE6E; */
/* background-color: #FFF8ED; */
border-radius: 10px;
b{
    cursor: pointer;
    &:hover{
        background-color: red;
    }
}
.edit{
    width: 50px;
    height: 12px;
    padding: 10px;
border-radius: 10px 0 0 10px;
border: 1px solid green;
    &:hover{
        background-color: green;
    }
}
.delete{
    width: 50px;
    height: 12px;
    padding: 10px;
border-radius:  0 10px 10px 0 ;
border: 1px solid red;
    &:hover{
        background-color: red;
    }
}
`
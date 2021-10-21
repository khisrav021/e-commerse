import styled from "styled-components";

export const Product = styled.div `
display: flex;
justify-content: space-evenly;
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
width: 100px;
height: 25px;
text-align: center;
color: #F4BE6E;
background-color: #FFF8ED;
border-radius: 10px;
`
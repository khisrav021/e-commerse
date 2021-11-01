import styled from "styled-components";

export const ProductTitleCard = styled.div `
width: 600px;
margin: 20px 0;
padding: 20px;
border-radius: 10px;
background-color: white;
`

export const ProductName = styled.div `
input{
    width: 580px;
    padding: 10px;
    outline: none;
    border-radius: 10px;
    border: 1px solid #E1E4E8;
}
padding-bottom: 10px;
`

export const Description = styled.div `
div{
    width: 600px;
    height: 40px;
    border-radius: 10px 10px 0 0 ;
    border: 1px solid #E1E4E8;
    border-bottom: none ;
}
textarea{
    width: 580px;
    height: 150px;
    padding: 10px;
    outline: none;
    border-radius:0 0 10px 10px;
    border: 1px solid #E1E4E8;
    resize: vertical;
}
padding-top: 10px;
padding-bottom: 10px;
`

export const Texts = styled.div `
display: flex;
border: 2px dashed #E1E4E8;
border-radius:10px;
background-color: #F4F6F8;
div{
    img{
        width: 200px;
    }
}
p{
    /* display: flex; */
}
margin-top: 10px;
padding: 10px;
.text{
padding-left: 20px;
padding-top: 20px;
}
`

export const IndutDiv = styled.div `
width: 55px;
label{
    input[type="file"] {
    display: none;
}
p{
    text-decoration: underline;
    cursor: pointer;
    color: #71B981;
    /* padding: 0 5px; */
}
}
`
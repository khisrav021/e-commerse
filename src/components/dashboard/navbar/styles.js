import styled from "styled-components";

export const DashboardNavbarCard = styled.nav `
width: 100%;
background-color: white;
display: flex;
`

export const Search = styled.div `
margin: 15px 30px;
form{
    display: flex;
    input{
        /* width: 300px; */
        width: calc(100% - 0px);
        height: 35px;
        border: none;
        outline: none;
        background-color: #FAFAFA;
        padding: 5px 15px;
        border-radius: 10px 0 0 10px;
    }
    button{
        height: 45px;
        border: none;
        outline: none;
        background-color: #FAFAFA;
        padding: 5px 15px;
        border-radius: 0 10px 10px 0;
        cursor: pointer;
        outline: none;
    }
}
`

export const Notification = styled.div `
margin: 0 30px;
margin-top: 25px;
div{
    margin-left: 500px;
    img{
        width: 20px;
        cursor: pointer;
    }
}
`

export const Profile = styled.div `
display: flex;
margin: 0 5px;
margin-top: 12px;
        cursor: pointer;
div{
    margin: 0 5px;
    text-align: center;
    img{
        width: 40px;
    }
    p{
        color: #1F1F1F;
    }
    svg{
        margin-top: 10px;
    }
}
`
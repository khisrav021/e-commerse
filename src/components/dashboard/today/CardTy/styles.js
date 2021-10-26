import styled from "styled-components";

export const CardToday = styled.div `
display: flex;
background-color: white;
border-radius: 10px;
`

export const Card = styled.div `
display: flex;
margin: 10px 6px;
`

export const Card1 = styled.div `
.IconDiv{
    width: 30px;
    height: 30px;
    background-color: #EDF6FF;
    border-radius: 50%;
    svg{
        margin-left: 5px;
        margin-top: 5px;
    }
}
h2{
    
    font-size: 15px;
}
`

export const Card2 = styled.div `
margin-left: 50px;
.HamburgerMenuIcon{
    margin-left: 60px;
    svg{
        cursor: pointer;
    }
}
.DF{
    margin-top: 80px;
    display: flex;
    .TopIcon{
    width: 40px;
    height: 40px;
        background-color: #E6F7ED;
        border-radius: 50%;
        svg{
        margin-left: 9px;
        margin-top: 9px;
        path{
            
        fill: #3FB474;
        }
    }
    }
    p{
        padding-left: 5px;
    padding-top: 9px;
    }
    color: #3FB474;
}
`
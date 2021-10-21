import styled from "styled-components";

export const TodayCard = styled.div `

margin-left: 20px;
margin-top: 40px;
svg{
    width: 20px;
}
`

export const Title = styled.div `
display: flex;
button{
    cursor: pointer;
    border-radius: 10px;
}
.btn1{
    margin-left: 50%;
    padding: 10px;
    background-color: #45A5FF;
    display: flex;
    border: none;
    color: #B8E2FE;
    p{
        padding-top: 3px;
        padding-left: 5px;
    }
}
.btn2{
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
}
`
export const TodayCards = styled.div `
display: flex;
justify-content: space-around;
`

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
    width: 40px;
    height: 40px;
    background-color: #EDF6FF;
    border-radius: 50%;
    svg{
        margin-left: 9px;
        margin-top: 9px;
    }
}
h2{
    
    font-size: 20px;
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
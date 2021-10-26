import styled from "styled-components";

export const Nav = styled.nav `
width: 300px;
/* height: 100%; */
height: 781px;
background-color: white;
h1{
    padding-top: 20px;
    font-size: 30px;
    font-weight: normal;
    color: #404040;
    padding-left: 60px;
}
a{
text-decoration: none;
}
.bg{
    position: fixed;
    background-color: white;
    width: 300px;
/* height: 100%; */
height: 781px;
}

`

export const Links = styled.nav `
    margin-top: 50px;
    position: fixed;
    .active{
        .Linke{
            
    background-color: #EDF6FF;
    div{
        svg{
        path{
            fill: #46A5FE;
        }
    }
    a{
        color: #46A5FE;
    }
    }
        }
    }
`


export const Linke = styled.nav `
transition-duration: 1s;
    margin-left: 50px;
    border-radius: 5px;
width: 200px;
display: flex;
cursor: pointer;
&:hover{
    background-color: #EDF6FF;
    div{
        svg{
        path{
            fill: #46A5FE;
        }
    }
    a{
        color: #46A5FE;
    }
    }
}
div{
    margin: 5px;
    svg{
    width: 30px;
    path{
        
transition-duration: 1s;
    }
}
p{
    padding-top: 3px;
    padding-left: 10px;
transition-duration: 1s;
color: #9CA2A7;
}
}



`

export const LogOutButton = styled.nav `
transition-duration: 1s;
    margin-left: 50px;
    border-radius: 5px;
width: 200px;
display: flex;
cursor: pointer;
position: fixed;
top: 550px;
/* margin-top: 100%; */
/* margin-bottom: 20px; */
&:hover{
    background-color: #EDF6FF;
    div{
        svg{
        path{
            fill: #46A5FE;
        }
    }
    p{
        color: #46A5FE;
    }
    }
}
div{
    margin: 5px;
    svg{
    width: 30px;
    path{
        
transition-duration: 1s;
    }
}
p{
    padding-top: 3px;
    padding-left: 10px;
transition-duration: 1s;
color: #9CA2A7;
}
}
`
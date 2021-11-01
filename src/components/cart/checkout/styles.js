import styled from "styled-components";

export const CheckoutCard = styled.div`
width: 329px;
margin: 20px;
background-color: white;
border-radius: 10px;
h1{
    padding: 10px;
}
`

export const CheckoutDiv = styled.div`
h3{
    padding: 10px;
}
textarea{
    margin-left: 30px;
    border-radius: 10px;
    outline: none;
    padding: 10px;
    border: 1px solid #CFD4D9;
    margin-bottom: 10px;
    resize: vertical;
}
`

export const CouponCode = styled.div`
margin-left: 30px;
padding-top: 10px;
form{
    display: flex;
    input{
        /* width: 300px; */
        /* width: calc(80% - 10px); */
        height: 35px;
        border-top: 1px solid #CFD4D9;
        border-bottom: 1px solid #CFD4D9;
        border-left: 1px solid #CFD4D9;
        border-right: 1px solid #CFD4D9;
        /* border-right: none; */
        outline: none;
        /* background-color: #FAFAFA; */
        padding: 5px 15px;
        border-radius: 10px 0 0 10px;
    }
    button{
        height: 47px;
        border-top: 1px solid #CFD4D9;
        border-bottom: 1px solid #CFD4D9;
        border-right: 1px solid #CFD4D9;
        border-left: 1px solid #CFD4D9;
        /* border-left: none; */
        outline: none;
        /* background-color: #FAFAFA; */
        padding: 5px 15px;
        border-radius: 0 10px 10px 0;
        cursor: pointer;
        outline: none;
    }
}
`

export const Buttons = styled.div`
margin-left: 100px;
button{
    border: none;
    color: white;
    border-radius: 10px;
    font-size: 20px;
    padding: 10px;
    margin-left: 25px;
    cursor: pointer;
}
`

export const AllClearButton = styled.button`
background-color: #D8514B;
transition-duration: 1s;
&:hover{
    background-color: #ED774D;
}
`

export const CheckoutButton = styled.button`
background-color: #ED774D;
transition-duration: 1s;
&:hover{
    background-color: #D8514B;
}
`

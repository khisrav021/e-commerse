
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from './Pages/mainPage/index.jsx';
import LogIn from './components/logIn/index.jsx';
// import LogOut from './components/logOut/index.jsx';
import { LogOutButton } from './components/navbar/styles.js';
import { ReactComponent as LogOutLogo } from "./asstets/icons/logOut.svg";

function App() {

  const adminUser={
    name: "khisrav021",
    password:"khisrav021"
  }

  const [user, setUser] = useState({name:"",password:""});

  const [error, setError] = useState("");

  const Login =details=>{
    console.log(details);

    if(details.name==adminUser.name && details.password==adminUser.password){
      console.log("Logged In");
      setUser({
        name: details.name,
      })
    } else{
      console.log("Details do not match!");
      setError("try this code error again")
    }
  }
  const Logout =()=>{
    setUser({name:"",password:""});
  }
  


  return (
    <>
    {(user.name !="") ? (
        <div>

<MainPage/>
          <LogOutButton onClick={Logout} ><div>
            <LogOutLogo />
          </div>
          <div>
            <p>Log Out</p>
          </div></LogOutButton>
        </div>
      ): (
        <LogIn Login ={Login} error ={error}/>
      )}
    </>
  );
}

export default App;

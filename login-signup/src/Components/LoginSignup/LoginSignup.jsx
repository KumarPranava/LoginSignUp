import React,{useState} from 'react'
import './LoginSignup.css';

import email_icon from '../Assets/emailpic.png';
import password_icon from '../Assets/passwordpic.png';
import person_icon from '../Assets/personpic.png';
const LoginSignup = () => {
    const [action,setAction]=useState("Sign Up")
  return (
    
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action==="Login"?<div></div>:<div className="name"><img src={person_icon} alt=""/><input type='text' placeholder="Name"/></div>}
        
            <div className="email"><img src={email_icon} alt=""/><input type='email' placeholder="Email"/></div>
            <div className="password"><img src={password_icon} alt=""/><input type='password' placeholder="Password"/></div>
        </div>
        {action==="Sign Up"?<div></div>:<div className="lost-password">Forgot password?<span>click here</span></div>}
        <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit"}onClick={()=>{setAction("Sign Up")}}>SignUp</div>
            <div className={action==="Sign Up"?"submit gray":"submit"}onClick={()=>{setAction("Login")}}>Login</div>
        </div>
    </div>
   
  )
}

export default LoginSignup
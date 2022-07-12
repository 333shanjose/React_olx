import React, {useState,useContext} from 'react';
import { firebasecontext } from '../../context/firebasecontext';
import { useHistory } from 'react-router';

import Logo from '../../olx-logo.png';
import './Login.css';

function Login() {
  const[Email,setEmail]=useState('')
  const[Password,setPassword]=useState('')
  const{firebase}=useContext(firebasecontext)
  const history=useHistory()
  const handlelogin=(e)=>{
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(Email,Password).then(()=>{
       history.push('/')
    })
  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handlelogin}>  
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            value={Email}
            onChange={(e)=>setEmail(e.target.value)}
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={Password}
            onChange={(e)=>setPassword(e.target.value)}
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a href='/signup'>Signup</a>
      </div>
    </div>
  );
}

export default Login;

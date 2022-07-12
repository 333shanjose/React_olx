import React, { useState,useContext } from 'react';
import { firebasecontext } from '../../context/firebasecontext';
import { useHistory } from 'react-router';

import Logo from '../../olx-logo.png';
import './Signup.css';

export default function Signup() {
  const[userName,setUsername]=useState('')
  const[Email,setEmail]=useState('')
  const[Phone,setPhone]=useState('')
  const[Password,setPassword]=useState('')
  const history=useHistory()
  const{firebase}=useContext(firebasecontext)
  const Submit=(e)=>{
    e.preventDefault()
    firebase.auth().createUserWithEmailAndPassword(Email, Password)
  .then((result)=> {
     result.user.updateProfile({displayName:userName}).then(()=>{
      firebase.firestore().collection('users').add({
        id:result.user.uid,
        userName:userName,
        Phone:Phone
        
      }).then(()=>{
         history.push('/login')
      }).catch((error)=>{
         const errorcode=error.code
         console.log(error)
         const errormessage=error.message
      })
    })
  })
    
    
  }
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={Submit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={userName}
            onChange={(e)=>setUsername(e.target.value)}
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={Email}
            onChange={(e)=>setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={Phone}
            onChange={(e)=>setPhone(e.target.value)}
            id="lname"
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={Password}
            onChange={(e)=>setPassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a href="/login">Login</a>
      </div>
    </div>
  );
}

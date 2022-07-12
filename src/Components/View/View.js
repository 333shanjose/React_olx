import React,{useEffect,useState,useContext} from 'react';
import { firebasecontext } from '../../context/firebasecontext';
import {postcontext} from '../../context/viewpost';

import './View.css';
function View() {
  const[users,setUsers]=useState('')
  const{Post}=useContext(postcontext)
  console.log(Post)
  const{firebase}=useContext(firebasecontext)
  useEffect(()=>{
  const {userId}=Post
  firebase.firestore().collection('users').where('id','==',userId).get().then((res)=>{
     res.forEach(doc => {
       setUsers(doc.data())
     });
  })
  },[])
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={Post.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {Post.Price}</p>
          <span>YAMAHA R15V3</span>
          <p>{Post.Name}</p>
          <span>{Post.date}</span>
        </div>
       {users && <div className="contactDetails">
          <p>Seller details</p>
          <p>{users.userName}</p>
          <p>{users.Phone}</p>
        </div>}
      </div>
    </div>
  );
}
export default View;

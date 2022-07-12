import React, { Fragment,useState,useContext } from 'react';
import {useHistory} from 'react-router-dom'
import './Create.css';
import Header from '../Header/Header';
import { firebasecontext } from '../../context/firebasecontext';
import { Authcontext } from '../../context/authcontext';

const Create = () => {
  const[Name,setName]=useState('')
  const[Category,setCategory]=useState('')
  const[Price,setPrice]=useState()
  const[Image,setImage]=useState()
  const {firebase}=useContext(firebasecontext)
  const history=useHistory()
  const{user}=useContext(Authcontext)
  const date=new Date()
  const handleSubmit=()=>{
    firebase.storage().ref(`/Image/${Image.name}`).put(Image).then(({ref})=>{
      ref.getDownloadURL().then((url)=>{
    firebase.firestore().collection('products').add({
       Name,
       Price,
       Category,
       url,
       userId:user.uid,
       createdAt:date.toDateString()
    })
    
      })
      
    })
    history.push('/')
  }
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              value={Name}
              onChange={(e)=>setName(e.target.value)}
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
              value={Category}
              onChange={(e)=>setCategory(e.target.value)}
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" id="fname" name="Price" value={Price} onChange={(e)=>setPrice(e.target.value)} />
            <br />
          
          <br />
          <img alt="Posts" width="200px" height="200px" src={Image?URL.createObjectURL(Image):""}></img>
          
            <br />
            <input type="file" onChange={(e)=>setImage(e.target.files[0])} />
            <br />
            <button className="uploadBtn" onClick={handleSubmit} >upload and Submit</button>
          
        </div>
      </card>
    </Fragment>
  );
};

export default Create;

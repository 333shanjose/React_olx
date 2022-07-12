import Heart from '../../assets/Heart';
import { firebasecontext } from '../../context/firebasecontext';
import {postcontext} from '../../context/viewpost';
import React, { useContext,useState,useEffect } from 'react';
import {useHistory} from "react-router-dom"
import './Cars.css';
function Cars() {
    const{firebase}=useContext(firebasecontext)
    const[Products,setProducts]=useState([])
    const{setPost}=useContext(postcontext)
    const history=useHistory()
    useEffect(()=>{
      firebase.firestore().collection('products').get().then((snapshot)=>{
        const Allpost=snapshot.docs.map((product)=>{
          return{
          ...product.data(),
          id:product.id
          
          }
        },[])
        setProducts(Allpost)
      })
    })
      return (
        <div className="postParentDiv">
          <div className="moreView">
            <div className="heading">
            <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
         
          {Products.map((product)=>{
          
            return  <div
            className="card"
          
            onClick={()=>{
              setPost(product)
              history.push('/view')
          }}
          >
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src={product.url} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; {product.Price}</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name">{product.Name}</p>
            </div>
            <div className="date">
              <span>{product.date}</span>
            </div>
          </div>
          })
        }
          
          
        
          
        </div>
      </div>
      </div>
  )
}
export default Cars;
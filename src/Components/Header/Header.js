import React,{useContext}  from 'react';
import { useHistory } from 'react-router';
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { Authcontext } from '../../context/authcontext';
import { firebasecontext } from '../../context/firebasecontext';

function Header() {
  
  const{user}=useContext(Authcontext)
  const{firebase}=useContext(firebasecontext)
  const history=useHistory()
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          
        
          <div className ="input">
          
            <input type="text"
              placeholder="Find cars,mobile phone and more..."
            />
             </div>
            
            
           
            
           <div data-aut-id="btnSearch" className="searchAction" >
            <Search color="#ffffff"></Search>
            </div>
            </div>
            
            
            
            
            
            
          
        
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
         {user?user.displayName : <span onClick={()=>history.push('/login')} >Login</span>}
          <hr />
        </div>
        <div>
          {user&& <span onClick={()=>{
              firebase.auth().signOut();
              history.push('/login')
          }}>Logout</span>}
        </div>

        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
      </div>
      
    
  );
}

export default Header;

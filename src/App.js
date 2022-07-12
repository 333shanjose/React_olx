import React ,{useContext,useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import SignupPage from './Pages/Signup';
import LoginPage from './Pages/Login';
import CreatePage from './Pages/Create';
import Cars from './Pages/Cars';

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import { Authcontext } from './context/authcontext';
import { firebasecontext } from './context/firebasecontext';
import ViewPost from './Pages/ViewPost';
import Postcontext from './context/viewpost';


function App() {
  const {setUser}=useContext(Authcontext)
  const {firebase}=useContext(firebasecontext)
  
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
  })
  return (
    <div>
    <Postcontext>
      <Router>
       <Route exact path='/'>
      <Home />
      </Route>
      <Route path="/signup">
        <SignupPage/>
        </Route>
        <Route path="/login">
        <LoginPage/>
        </Route>
        <Route path="/create">
        <CreatePage/>
        </Route>
        <Route path="/view">
        <ViewPost/>
        </Route>
        <Route path="/cars">
        <Cars/>
        </Route>
      </Router>
      </Postcontext>
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {firebasecontext} from './context/firebasecontext'
import firebase from './firebase/config'
import Context from './context/authcontext'
ReactDOM.render
(
<firebasecontext.Provider value={{firebase}}>
 <Context>
<App />
</Context>
</firebasecontext.Provider>,
document.getElementById('root')
);

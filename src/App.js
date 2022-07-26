import React, {useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { BrowserRouter as 
    Router, 
    Routes ,
    Route } 
  from 'react-router-dom';
import {auth} from './firebase';
import {useStateValue} from './StateProvider';


function App() {
  const [dispatch] = useStateValue('');
   // eslint-disable-next-line
    useEffect (() => {
    //will only run once when the app component loads...
    auth.onAuthStateChanged(authUser => {

      if (authUser) {
        ///the user just logged in / the user was logged in/
        dispatch ({
          type: 'SET_USER',
          user: authUser
        })
      }
      else {
        //the user is logged oout
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })// eslint-disable-next-line
  }, [])

    return (
      //BEM
      <Router>
      <div className="app">

      <Routes>
        <Route path="/login">      
          <Login />
        </Route>

        <Route path="/checkout">    
          <Header/>  
          <Checkout />
        </Route>
        
        <Route path="/">
          <Header/>  
          <Home/>
        </Route>

        </Routes>
      </div>
      </Router>
    );
}

export default App;

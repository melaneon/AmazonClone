import React, {useState} from 'react'
import './Login.css'
import {Link, useNavigate} from "react-router-dom";
import {auth} from  './firebase';

function Login() {
    const history = useNavigate();
    const [email, setEmail] = useState ('');
    const [password, setPassword ]= useState ('');
    
    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }
    
    const register = e => {
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email,password)
            .then ((auth) => {
                //Successfully created a new user with email and password
                console.log (auth);
                if (auth) {
                    history.push('/')
                }
            })
            .catch (error => alert(error.message))

    }

    return (
        <div className ="login">
            <Link to=''>
                <img 
                    className= "login__logo"
                    src ="https://thumbs.dreamstime.com/b/amazon-159029074.jpg"
                />
            </Link>
            <div className ="login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input 
                        type="text" 
                        value = {email} 
                        onChange = { e => setEmail(e.target.value)} >
                    </input>
                    
                    <h5>Password</h5>
                    <input 
                        type="password" 
                        value ={password} 
                        onChange={e => setPassword(e.target.value)} >
                    </input>

                    <button type='submit' onClick ={signIn} className ='login__signinButton'>Sign In</button>
                </form>
                <p> 
                By continuing, you agree to AMAZON FAKE CLONE's Conditions of Use and Privacy Notice.
                </p>
                <button onClick = {register} className ='login__registerButton'>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login

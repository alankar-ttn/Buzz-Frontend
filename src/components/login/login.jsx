import React from 'react'
import './login.css';
import logo from '../../images/Company-Logo/To-The-New-Logo.png'

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

const handleGoogleSignIn  = () => {
  const auth = getAuth();

  signInWithPopup(auth, provider)
  .then(result => {
    const user = result.user;
    console.log(user);
  })
}

export default function login() {

  return (
    <div className="login">
      <div className="loginBox">
          <div className="loginLeftBox">
              <div className="companyLogo"><img src={logo} alt="" /></div>
               <h4 className="loginDesc1">Enter your details and Start your journey with us</h4>
                   <span className="loginDesc2">Don't stop until you're proud</span>
               <button className="buttonGoogle" onClick={handleGoogleSignIn}>Sign in with Google</button>
          </div>
          <div className="loginRightBox">
            <div className="loginBox2">
              <h3 className="head">Login To Your Account</h3>
                <input className="loginInput" placeholder="TTN Username"/>
                <input className="loginInput" placeholder="Password"/>
                <div className="checkbox">
                  <span className="rememberMe">
                    <input type="checkbox" id="checkbox" name="identity" value="rememberMee"/>
                    <label htmlFor="identity">Remember&nbsp;Me</label>
                  </span>
                 <div className="loginforgot">Forgot Password?</div>
                </div>
                <button className="loginButton">Sign In</button>
            </div>
          </div>
      </div>
    </div>
  )
}

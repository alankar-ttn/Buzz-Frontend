import React from 'react'
import './login.css';
import logo from '../../images/Company-Logo/To-The-New-Logo.png'

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import axios from 'axios';

const provider = new GoogleAuthProvider();

const handleGoogleSignIn  = async () => {
  const auth = getAuth();

  await signInWithPopup(auth, provider)
  .then(async (result) => {
    const user = result.user;
    console.log(user)
    await axios.post("http://127.0.0.1:5000/api/auth/register/google", {
      email: user.email,
      firstName: user.displayName.split(" ")[0],
      lastName: user.displayName.split(" ")[1],
      uid: user.uid
    }).then(res => console.log(res))
    .catch(err => console.log(err.response))
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

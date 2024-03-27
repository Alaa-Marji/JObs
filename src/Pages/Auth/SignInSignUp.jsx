import React, { useState } from 'react';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import './undraw_personal_file_re_5joy.svg';
import './undraw_instant_support_re_s7un.svg';
import "../Auth/Auth.css";



const SignInSignUp = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSignUpMode = () => {
    setIsSignUp(true);
  };

  const handleSignInMode = () => {
    setIsSignUp(false);
  };

  return (
    <div className={`container ${isSignUp ? 'sign-up-mode' : ''}`} >
      {isSignUp ? <SignUpForm /> : <SignInForm />}
      <div className="panels-container">
        
        <div className="panel left-panel">
          <div className="content">
            <h3>New here?</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, ex ratione. Aliquid!</p>
            <button className="btn transparent" onClick={handleSignUpMode} >Sign up</button>
          </div>
          <img  required src="./undraw_personal_file_re_5joy.svg" className="image" alt="Register" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laboriosam ad deleniti.</p>
            <button className="btn transparent" onClick={handleSignInMode}>Sign in</button>
          </div>
          <img src="./undraw_instant_support_re_s7un.svg" className="image" alt="Login" />
         
        </div>
      </div>
    </div>
  );
};

export default SignInSignUp;

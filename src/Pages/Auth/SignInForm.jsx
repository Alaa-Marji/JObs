import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGoogle } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';
import { URL,LOG} from "../../Api/Api"
import Loading from "../../Components/website/Loading/Loading";
import Cookie from 'cookie-universal';
import "../Auth/Auth.css";



export  default function SignInForm(){
  //States
const [form,setForm]=useState({
  Email :'',
  Password:'',
})
 
    //Loading
  const [oLoading,setLoading]=useState(false);

    //Cookies
    const cookie= Cookie();

    //err 
    const[err,setErr]=useState('');

    //Handle Form Change
    function handleChange(e){
  
      setForm({...form,[e.target.name]: e.target.value})
      
        }
  // handle Submit
  async function handleSubmit(e){
    e.preventDefault();
    setLoading(true);
  
    try{
     const res= await axios.post(`${URL}/${LOG}`,{
      email: form.email,
      password:form.password,
     });
     setLoading(false);
     const token = res.data.token;
     cookie.set('e-commerce',token);
     window.location.pathname='/home';
  
    } catch(err){
      setLoading(false);
     
      if(err.response === 401){
        setErr('Wrong Email Or Password');
      }else{
        setErr('Internal Server Error');
      }
     
    }
  
    }




  return (
    <>
    {oLoading && <Loading></Loading>}
    <form className="sign-in-form" onSubmit={handleSubmit}>
      <h2 className="titleL">Sign in</h2>
      <div className="input-field">
      <i class="bi bi-envelope-at-fill">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-at-fill" viewBox="0 0 16 16">
  <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671"/>
  <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791"/>
</svg>
 </i>
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          required
          onChange={handleChange} 
        />
        <label  htmlFor='email'>Email</label>
      </div>
      <div className="input-field">
      <i class="bi bi-lock-fill">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lock-fill" viewBox="0 0 16 16">
  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2"/>
</svg>
      </i>
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          required 
          onChange={handleChange}
        
          minLength={6}
        />
  
      <label  htmlFor='password'>Password</label>
      </div>
      <a href='/Email'  className='Forget'>Forget Your Password?</a>

      <input type="submit"  className="btn solid" />
      <p className="social-text">Or Sign in with social platforms</p>
      <div className="social-media">

        <a href="https://accounts.google.com/v3/signin/identifier?ifkv=ATuJsjw1u9M6_Jf6T1Kh0Ngq9tXrjEqUGwc2JEB_5TfKtIf-GDetQr2M3oNqSYiYkJQGjzdzY6ct&lp=1&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-2012837149%3A1710483005129626&theme=mn&ddm=0" className="social-icon"><FontAwesomeIcon icon={faGoogle} /></a>
      
      </div>
      {err !=="" && <span className="err">{err}</span>}
    </form>
    </>
  );
};



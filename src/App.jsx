import React from 'react';
import SignInSignUp from './Pages/Auth/SignInSignUp';
import GoogleCallback from './Pages/Auth/googleCallback';
import {Route, Routes} from 'react-router-dom'
import HomePage from './Pages/website/HomePage';

import OTPImput from "./Pages/Auth/OTPImput";
import ResetPassword from './Pages/Auth/ResetPassword';
import EmailInputForm from './Pages/Auth/Email';

 function App(){
 return(
  <>
        <Routes>
       <Route path='/Register' element={ <SignInSignUp />}></Route>
       <Route path='/pass' element={ <ResetPassword/>}></Route>
       <Route path='/Email' element={ <EmailInputForm/>}></Route>
       <Route path='/home' element={   <HomePage   /> }></Route>
       <Route path='/op' element={   <OTPImput   /> }></Route>
       <Route path='/auth/google/callback' element={< GoogleCallback  /> }  />
      </Routes>

      </>
  );
}

export default App;

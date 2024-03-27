import { useEffect } from "react";
import '../../Api/Api';
import { USERS } from "../../Api/Api";
import axios from "axios";
import Cookie from "cookie-universal";
import Navbar from './Navbr';

export default function HomePage(){
 
     const cookie = Cookie();

        useEffect(() => {
        axios.get(`${URL}/${USERS}`,{headers: {
            Authorization : 'Bearer  ' + cookie.get('e-commerce')
        }})
    .then((data)=>console.log( data))
    .catch(err => console.log(err))
        },[]) 
        return(<>
          <Navbar></Navbar>
            <div>Hi Users</div>
        
        </>
          

        )
;
    
}
  
  
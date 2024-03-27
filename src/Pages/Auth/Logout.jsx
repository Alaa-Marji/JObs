import axios from "axios"
import Cookie from "cookie-universal";
import { URL,LOGOUT} from "../../Api/Api";


export default function Logout(){
const cookie=Cookie();
    async function handleLogout(){
        try{
   const re= await axios.get(`${URL}/${LOGOUT}`,{headers: {
    Authorization : 'Bearer  ' + cookie.get('e-commerce')

}})
console.log('hi');
        }catch(err){

        }
    }

return <button onClick={handleLogout}>Logout</button> ;


}
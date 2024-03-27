import axios from 'axios';
import React, { useEffect } from 'react';
import { URL,GOOGLECALLBACK} from "../../Api/Api";
import {useLocation} from "react-router-dom"

export default function GoogleCallback(){
    const location = useLocation();
    useEffect(()=>{
        async function GoogleCall(){
            try{
                const res = await axios.get(
                    `${URL}/${GOOGLECALLBACK}${location.search}`
                );
                console.log(res);
            }catch(err){
                console.log(err);
            }
    }
    GoogleCall();
},[]);
    return <div>Hi</div>
}
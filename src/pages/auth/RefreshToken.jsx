import React, { useContext, useEffect, useState } from "react";
import { User } from "./context";
// import axios from "axios";
import { Outlet } from "react-router-dom";

export default function RefreshToken() {
  const context = useContext(User);
  const token = context.token;
  const refresh_token = context.refresh_token;
  const [loading, setLoading] = useState(true);
  // console.log('hi');

  
  let updateToken = async () => {
    console.log('1');
    let response = await fetch('http://127.0.0.1:8000/api/token_refresh/',{
        method : 'POST',
        headers:{
            'Content-Type':'application/json',
            // 'Authorization': `Bearer ${refresh_token}`
        },
        body:JSON.stringify({'refresh':refresh_token})
        

    })
    
    console.log('2');

    let data = await response.json()
    console.log(data);

    if (response.status === 200){
        // setUser(data)
        context.setToken((data.access))
        context.setRefreshToken(data.refresh)
        setTimeout(alert('done'), 2000)

    }else{
        alert('error')
        console.log(data);
    }

    if(loading){
        setLoading(false)
    }
}


useEffect(()=> {

if(loading){
    updateToken()
}

let fourMinutes = 1000 * 60 * 4  

let interval =  setInterval(()=> {
    if(token){
        updateToken()
    }
}, fourMinutes)
return ()=> clearInterval(interval)

}, [token, loading])


  return !loading ?loading  : <Outlet />;
}

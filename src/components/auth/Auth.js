import React, {useEffect} from "react";

import './index.css'
import fetch from "node-fetch";

import {accessKey, code, redirect_url, secret} from '../../consts/consts'

const Auth = (props) =>  {

    useEffect(()=>{
    fetch ('https://unsplash.com/oauth/token',{
        method:'POST',
        body:{
            'client_id':accessKey,
            'client_secret':secret,
            'redirect_uri':redirect_url,
            'code':code,
            'grant_type':'authorization_code'
        }
    }).then(res => res.json())
        .then(res => console.log(res))
},[])


    return(
        <div className="modal-overlay">
            <div className="modal">
                <div className="modal-guts">
                    <button onClick={()=> props.history.goBack()}>back</button>
                </div>
            </div>
        </div>

    );
}

export default Auth;
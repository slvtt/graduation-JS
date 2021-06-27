import React, {useEffect} from "react";

import './index.css'
import fetch from "node-fetch";

import {accessKey, code, redirect_url, secret} from '../../consts/consts'

const Auth = (props) =>  {

    useEffect(()=>{
    fetch (`https://unsplash.com/oauth/token?client_id=${accessKey}&client_secret=${secret}&redirect_uri=${redirect_url}&code=${code}&grant_type=authorization_code`,{
        method:'POST',
    }).then(res => res.json())
        .then(res => localStorage.setItem('token',JSON.stringify(res.access_token)))
},[])


    return(
        <div className="modal-overlay">
            <div className="modal">
                <div className="modal-guts">
                    <button onClick={()=> props.history.goBack()}>back</button>
                    <a href={`https://unsplash.com/oauth/authorize?client_id=${accessKey}&redirect_uri=${redirect_url}&response_type=code&scope=public+read_user+write_likes`}>futh</a>
                </div>
            </div>
        </div>

    );
}

export default Auth;
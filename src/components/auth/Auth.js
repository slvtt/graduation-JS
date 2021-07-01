import React, {useEffect} from "react";

import './index.css'

import {accessKey, code, redirect_url, secret} from '../../consts/consts';

import {connect} from "react-redux";
import {authAction} from '../../redux/actions/authAction';
import {getToken} from "../../redux/actions/tokenAction";

const Auth = ({history,authAction,getToken}) =>  {

    useEffect(()=>{

    fetch (`https://unsplash.com/oauth/token?client_id=${accessKey}&client_secret=${secret}&redirect_uri=${redirect_url}&code=${code}&grant_type=authorization_code`,{
        method:'POST',
    }).then(res => res.json())
        .then(res => {

            if (res.access_token){

                localStorage.setItem('token', JSON.stringify(res.access_token))
                getToken(res.access_token)
                authAction()
            }

        })
},[])

    return(
        <div className="modal-overlay">
            <div className="modal">
                <div className="modal-guts">
                    <button onClick={()=> history.goBack()}>back</button>

                    <button onClick={() => authAction() }>Авторизация</button>

                    <a href={`https://unsplash.com/oauth/authorize?client_id=${accessKey}&redirect_uri=${redirect_url}&response_type=code&scope=public+read_user+write_likes`}>Ссылка на получение кода</a>
                </div>
            </div>
        </div>

    );
}

const mapStateToProps = state => {
    return {
        authState: state.authReducer,
        token: state.tokenReducer
    }
}

const mapDispatchToProps = {
    authAction,
    getToken
}

export default connect (mapStateToProps,mapDispatchToProps)(Auth)
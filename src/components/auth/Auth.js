import React, {useEffect, useState} from "react";

import './index.css'

import {accessKey, code, redirect_url, secret} from '../../consts/consts';

import {connect} from "react-redux";
import {authAction} from '../../redux/actions/authAction';
import {getToken} from "../../redux/actions/tokenAction";
import {Button, CircularProgress} from "@material-ui/core";
import MoodIcon from '@material-ui/icons/Mood';

const Auth = ({history,authAction,getToken}) =>  {

    const [isAuthen,setIsAuthen] = useState(false);

    useEffect(()=>{

        window.location.replace(`https://unsplash.com/oauth/authorize?client_id=${accessKey}&redirect_uri=${redirect_url}&response_type=code&scope=publi
c+read_user+write_likes`)

        console.log(window.location.code)

    },[])

    return(
        <div className="modal-overlay">
            <div className="modal">
                <div className="modal-guts">
                    <div className="container">
                        {
                            !isAuthen ?
                                <>
                                    <h3 className="modal-title_auth">Сейчас идет процесс авторизации, подождите пару секунд...</h3>
                                    <CircularProgress color="secondary" />
                                    <Button
                                        className="modal_back-btn"
                                        variant="outlined"
                                        onClick={()=> history.goBack()}
                                    >
                                        Назад

                                    </Button>

                                    <a href={`https://unsplash.com/oauth/authorize?client_id=${accessKey}&redirect_uri=${redirect_url}&response_type=code&scope=public+read_user+write_likes`}>Ссылка на получение кода</a>
                            </>
                                :
                                <>
                                    <h3 className="modal-title_auth-completed">Ура, Вы авторизовались! Теперь вы можете просматривать фотографии!
                                        <MoodIcon/>
                                    </h3>

                                    <p className="modal_auth-completed_text">Нажмите кнопку "Назад", чтобы просматривать фотографии</p>

                                    <Button
                                        className="modal_back-btn"
                                        variant="outlined"
                                        onClick={()=> history.goBack()}
                                    >
                                        Назад
                                    </Button>
                                </>
                        }

                    </div>

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
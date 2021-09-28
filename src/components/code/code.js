import React, {useEffect, useState} from "react";
import './index.css'
import {connect} from "react-redux";
import {Button, CircularProgress} from "@material-ui/core";
import MoodIcon from '@material-ui/icons/Mood';

import {authAction} from '../../redux/actions/authAction';
import {getToken} from "../../redux/actions/tokenAction";
import {accessKey, redirect_url, secret} from '../../consts/consts';

const Coden = ({history, authAction, getToken}) => {
    const [isAuthen, setIsAuthen] = useState(false);
    let code = null;
    useEffect(() => {
        code = window.location.search.substr(6)
        console.log(code);

        if (code) {
            fetch(`https://unsplash.com/oauth/token?client_id=${accessKey}&client_secret=${secret}&redirect_uri=${redirect_url}&code=${code}&grant_type=authorization_code`, {
                method: 'POST',
            }).then(res => res.json())
                .then(res => {

                    if (res.access_token) {

                        localStorage.setItem('token', JSON.stringify(res.access_token))
                        getToken(res.access_token)
                        authAction()
                        setIsAuthen(!isAuthen);
                    }

                })
        } else {
            alert('Что-то на сервере пошло не так! Приносим свои извинения!')
        }
    }, [])

    return (
        <div className="modal-overlay">
            <div className="modal">
                <div className="modal-guts">
                    <div className="container">
                        {
                            !isAuthen ?
                                <>
                                    <h3 className="modal-title_auth">Сейчас идет процесс авторизации, подождите пару
                                        секунд...</h3>
                                    <CircularProgress color="secondary"/>
                                    {/*<button onClick={() => authAction() }>Авторизация</button>*/}
                                    <Button
                                        className="modal_back-btn"
                                        variant="outlined"
                                        onClick={() => history.goBack()}
                                    >
                                        Назад

                                    </Button>

                                    <a href={`https://unsplash.com/oauth/authorize?client_id=${accessKey}&redirect_uri=${redirect_url}&response_type=code&scope=public+read_user+write_likes`}>Ссылка
                                        на получение кода</a>
                                </>
                                :
                                <>
                                    <h3 className="modal-title_auth-completed">Ура, Вы авторизовались! Теперь вы можете
                                        просматривать фотографии!
                                        <MoodIcon/>
                                    </h3>

                                    <p className="modal_auth-completed_text">Нажмите кнопку "Назад", чтобы просматривать
                                        фотографии</p>

                                    <Button
                                        className="modal_back-btn"
                                        variant="outlined"
                                        onClick={() => history.goBack()}
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


export default connect(mapStateToProps, mapDispatchToProps)(Coden)
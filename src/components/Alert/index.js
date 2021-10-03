import React from 'react';
import './index.scss'
import {useDispatch} from "react-redux";
import {likeErrorLeave} from "../../redux/actions/likeClick";
function Alert({hasError,hide}) {
    const dispatch = useDispatch()
    setTimeout(()=>dispatch(likeErrorLeave()) ,1500)
    if (!hasError) {
        return null
    }
    return (
        <div className="alert">
            <div className="alert-message">
                <div>Ошибка!</div>
                <div>Похоже,что вы не были авторизованы. Авторизируйтесь и повторите попытку</div>
            </div>
        </div>
    );
}

export default Alert;
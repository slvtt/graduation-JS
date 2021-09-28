import React from 'react';
import {Redirect} from "react-router";
import {connect} from "react-redux";
import {AppBar, Avatar, Box, Button, Container, Toolbar} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import classNames from "classnames";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, useHistory
} from "react-router-dom";

import Logo from "../public/img/Lilgram.png";
import Auth from '../components/auth/Auth'
import Coden from "../components/code/code";

function Header({authState}) {
    const classes = useStyles();
    const history = useHistory();

    return(
        <Router>
            <AppBar className={classes.header}>
                <Container >
                    <Toolbar className={classes.spaceBetween}>
                        <div >
                            <img src= {Logo} alt="logo"/>
                        </div>
                        <Box className={classes.nickAvatar}>
                            {
                                !authState.isAuth
                                ? <>
                                        <Button className="auth-btn" variant="outlined"><Link to="/auth">Авторизоваться</Link></Button>
                                    </>
                                : <h2 className="app-title">
                                    Смотрите и наслаждайтесь красивыми фотографиями c Lilgram!
                                    </h2>
                            }
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Switch>
                <Route exact path = "/auth" >
                    <Auth
                        history={history}
                    />
                </Route>
                <Route exact path = "/coden">
                    <Coden history={history} />
                </Route>
                <Redirect to="/" />

            </Switch>
        </Router>
    )
}
const useStyles = makeStyles({
    header:{
        background:'#fff',
        paddingTop:'10px',
        height:'73px',
        position:'static'
    },
    nickAvatar:{
        justifyContent: 'space-between',
        display: 'flex',
        alignItems: 'center',
    },
    purpleAvatar:{
        backgroundColor:'purple'
    },
    spaceBetween:{
        justifyContent:'space-between',
        alignItems:'center',
    },
    colorBlack:{
        color:'#000000'
    },

    nickName:{
        marginRight:'10px'
    },

})

const mapStateToProps = state => {
    return {
        authState:state.authReducer
    }
}

export default connect (mapStateToProps,null)(Header)

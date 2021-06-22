import React, {useEffect} from 'react';
//import material UI
import {AppBar, Avatar, Box, Container, Toolbar} from '@material-ui/core';

import {makeStyles} from '@material-ui/core/styles';

import Logo from "../public/img/Lilgram.png";

import classNames from "classnames";

import Auth from '../components/auth/Auth'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, BrowserRouter
} from "react-router-dom";
import {Redirect} from "react-router";

function Header() {
    const classes = useStyles();
    return(
        <Router>
            <AppBar className={classes.header}>
                <Container >
                    <Toolbar className={classes.spaceBetween}>
                        <div >
                            <img  src = {Logo}/>
                        </div>
                        <Box className={classes.nickAvatar}>
                            <Box className={classNames(classes.colorBlack,classes.nickName)}  component="span" ><Link to="/auth">Auth</Link></Box>

                            <Avatar className={classes.purpleAvatar}>N</Avatar>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Switch>
                <Route exact path = "/auth" component={Auth} />
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

export default Header
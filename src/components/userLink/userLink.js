import React, {useEffect, useState} from "react";
import {Avatar, Box} from '@material-ui/core';
import Logo from '../../public/img/Lilgram.png'
import classNames from "classnames";
import {makeStyles} from '@material-ui/core/styles';
 import { BrowserRouter as Router,
    Switch,
     Route,
     Link
} from "react-router-dom";

import Auth from './Auth'

const UserLink = () => {

    const classes = useStyles()

    return(
        <Router>
            <div >
                <img  src ={Logo}/>
            </div>
            <Box className={classes.nickAvatar}>
                <Box className={classNames(classes.colorBlack,classes.nickName)}  component="span" ><Link to="/auth">Auth</Link></Box>
                <Avatar className={classes.purpleAvatar}>N</Avatar>
            </Box>

            <Switch>
                <Route path="/" component={Auth}>
                </Route>
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

export default UserLink;
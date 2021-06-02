import React from 'react';
//import function classnames
import classNames from 'classnames'
//import material UI
import { AppBar,Avatar,Box,Container, Grid, Link, Toolbar } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
//import logo of app
import Logo from '../public/img/Lilgram.png';
import UserLink from "../components/userLink/userLink";

function Header() {
    const classes = useStyles()
    return(
        
        <AppBar className={classes.header}>
                <Container >
                    <Toolbar className={classes.spaceBetween}>
                        <UserLink />
                    </Toolbar>
                </Container>
            </AppBar>
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
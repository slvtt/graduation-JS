import React from 'react';
import classNames from 'classnames'
import { AppBar,Avatar,Box,Container, Link, Toolbar } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Logo from '../public/img/Lilgram.png'


function Header (){
    const classes = useStyles()
    return(
        <AppBar  className={classes.header}>
            <Container fixed  >
                <Toolbar className={classes.spaceBetween}>
                    <Link>
                        <img src ={Logo}/>
                    </Link>
                    <Box className={classes.nickAvatar}>
                        <Box className={classNames(classes.colorBlack,classes.nickName)}  component="span">NickName</Box>
                        <Avatar className={classes.purpleAvatar}>N</Avatar>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}


export default Header;
const useStyles = makeStyles({
    header:{
        background:'#fff',
        paddingTop:'10px',
        height:'73px',
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
    }
})


import React from 'react';
//import material UI
import {AppBar, Container, Toolbar} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
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
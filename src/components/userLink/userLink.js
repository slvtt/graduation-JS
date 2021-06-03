import React, {useEffect, useState} from "react";
import {Avatar, Box, Link} from '@material-ui/core';
import Logo from '../../public/img/Lilgram.png'
import classNames from "classnames";
import {makeStyles} from '@material-ui/core/styles';

const UserLink = () => {


    const redirectUri = 'urn:ietf:wg:oauth:2.0:oob';
    const accessKey = 'wdNn-PaVrpGbxNb07igZx_c2D-f8ux2_1LTZb-uyA6U';
    const secret = 'vlJy_e3ElNhZFQntKWkm653HgKv0JpU1dj1Ln7NOB64';
    const code = `${window.location.code}`;
    const grant_type = 'authorization_code'
    const url = 'https://unsplash.com/oauth/token';
    const classes = useStyles()

    const [auth,setAuth] = useState(false);

    const getAuth = () =>{
        location.href = `https://unsplash.com/oauth/authorize?client_id=${accessKey}&redirect_uri=${redirectUri}&response_type=code&scope=public`
        setAuth(!auth)
    }

    useEffect(()=>{
        fetch (url,{
            method:'POST',
            headers:{
                'client_id':accessKey,
                'client_secret':secret,
                'redirect_uri':'urn:ietf:wg:oauth:2.0:oob',
                'code':'Bsb2UfxtAHZT4EXcBC_f4ujTseQA3eH3IruMYaYDd38',
                'grant_type':'authorization_code'
            }
        }).then(res => res.json())
            .then(res => console.log(res))
        console.log(1)
    },[auth])

    return(
        <>
            <Link >
                <img  src ={Logo}/>
            </Link>
            <Box className={classes.nickAvatar}>
                <Box className={classNames(classes.colorBlack,classes.nickName)}  component="span" onClick={getAuth} >NickName</Box>
                <Avatar className={classes.purpleAvatar}>N</Avatar>
            </Box>
        </>

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
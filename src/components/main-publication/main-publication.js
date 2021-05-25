import React from 'react';
import {Avatar ,Grid,Box } from '@material-ui/core';
import classNames from 'classnames';
import {makeStyles} from '@material-ui/core/styles';
import LikeBtnGroup from '../like-group/likeGroup';

import nodeFetch from 'node-fetch';
import { createApi } from 'unsplash-js';


const unsplash = createApi({
    accessKey:'wdNn-PaVrpGbxNb07igZx_c2D-f8ux2_1LTZb-uyA6U',

    secret:"vlJy_e3ElNhZFQntKWkm653HgKv0JpU1dj1Ln7NOB64",

    callbackUrl: "urn:ietf:wg:oauth:2.0:oob",
    
    fetch:nodeFetch
});

// const authenticationUrl = unsplash.auth.getAuthenticationUrl([
//     "public",
//     "write_likes"
// ])

// location.assign(authenticationUrl)

// const code = location.search.split('code=')[1];

// console.log(code)

// if (code){
//     unsplash.auth.userAuthentication(code)
//         .then(response =>
//             response.json()
//         )
//         .then(json =>
//         {
//             console.log(json)
//             unsplash.auth.setBearerToken(json.access_token);
//         })
// }
const MainPublication = ({imgSrc}) =>{

    const classes = useStyles();

    return imgSrc.map((item,index) =>(
            <Grid style={{ height: 'auto !important' }} item xs={6} >
                    <div>
                        <div className="header-img-block">
                            <Avatar className={classes.purpleAvatar}>N</Avatar>
                            <Box className={classNames(classes.colorBlack,classes.nickName,classes.nickNameMain)}  component="span">
                                NickName
                            </Box>
                        </div>
                        <div className="main-img">
                            <img src={item}/> 
                        </div>

                        <div className="main-img_like">
                            <LikeBtnGroup />
                        </div>
                    </div>
                </Grid>
    ))
        
}


const useStyles = makeStyles({
    purpleAvatar:{
        backgroundColor:'purple'
    },
    colorBlack:{
        color:'#000000'
    },

    nickName:{
        marginRight:'10px'
    },
    nickNameMain:{
        margin:'0 0 0 20px',
    }
})

export default MainPublication;
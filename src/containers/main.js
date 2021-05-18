
import React from 'react';
import { Container,Avatar ,Grid,Box } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import classNames from 'classnames';
import testImg from '../public/img/test.jpg';
import LikeBtnGroup from '../components/likeGroup';

import nodeFetch from 'node-fetch';
import { createApi } from 'unsplash-js';

const unsplash = createApi({
    accessKey:'wdNn-PaVrpGbxNb07igZx_c2D-f8ux2_1LTZb-uyA6U',
    fetch:nodeFetch
})
const controller = new AbortController();
const signal = controller.signal;


unsplash.photos.get({ photoId: 'kLfkVa_4aXM' }).then(result => {
    switch (result.type) {
        case 'error':
        console.log('error occurred: ', result.errors[0]);
        case 'success':
        const photo = result.response;
        console.log(photo.links.download);
    }
});

function Main () {
    const classes = useStyles();
    return(
        <main>
        <Container style={{marginTop:'40px'}} >

            <Grid container spacing={10}>

                <Grid item xs={6}>
                    <div>
                        <div className="header-img-block">
                            <Avatar className={classes.purpleAvatar}>N</Avatar>
                            <Box className={classNames(classes.colorBlack,classes.nickName,classes.nickNameMain)}  component="span">
                                NickName
                            </Box>
                        </div>
                        <div className="main-img">
                            <img src={testImg}/>
                        </div>

                        <div className="main-img_like">
                            <LikeBtnGroup />
                        </div>
                    </div>
                </Grid>

                <Grid item xs={6}>
                    <div>
                        <div className="header-img-block">
                            <Avatar className={classes.purpleAvatar}>N</Avatar>
                            <Box className={classNames(classes.colorBlack,classes.nickName,classes.nickNameMain)}  component="span">
                                NickName
                            </Box>
                        </div>
                        <div className="main-img">
                            <img src={testImg}/>
                        </div>

                        <div className="main-img_like">
                            <LikeBtnGroup />
                        </div>
                    </div>
                </Grid>

            </Grid>

        </Container>
            </main>
    )
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

export default Main
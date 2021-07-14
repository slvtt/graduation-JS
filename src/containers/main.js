import React, { useEffect, useState } from 'react';
import { Container,Grid } from '@material-ui/core';

import nodeFetch from 'node-fetch';
import { createApi } from 'unsplash-js';

import {accessKey,redirect_url,secret} from '../consts/consts'

import MainPublication from '../components/main-publication/main-publication';

import {connect} from "react-redux";

import {arrLike} from "../redux/actions/arrLikeAction";

import {initialLikes} from "../redux/reducers/initialLikes";

const unsplash = createApi({
    accessKey:accessKey,

    secret:secret,

    callbackUrl: redirect_url,
    
    fetch:nodeFetch,

});


const photo = unsplash.photos.getRandom({count:10}).then(result =>{

    const responcePhotos = result.response

    localStorage.setItem('response',JSON.stringify(responcePhotos))

    const linksUsers = responcePhotos.map(item => item.user.links.html)
    const arrUrls=responcePhotos.map(item => item.urls.regular)
    const profileImages= responcePhotos.map(item => item.user.profile_image.small)
    const userNickName = responcePhotos.map(item => item.user.username)
    const countLike = responcePhotos.map(item => item.likes)
    const photos_id = responcePhotos.map(item => item.id);

/*
    localStorage.setItem('userImg',JSON.stringify((profileImages)))
    localStorage.setItem('users_urls',JSON.stringify(linksUsers))
    localStorage.setItem('user_names',JSON.stringify(userNickName))
    localStorage.setItem('likes',JSON.stringify(countLike))
    localStorage.setItem('photos',JSON.stringify(arrUrls))
    localStorage.setItem('photos_id',JSON.stringify(photos_id))
*/

})

function Main ({arrLike}) {


    useEffect(() => {

        const arrayObj = localStorage.getItem('response');

        if (arrayObj) {

            arrLike(JSON.parse(arrayObj))
        }
    },[])

    return(
            <main>
                <Container style={{marginTop:'40px'}} >
                    <Grid container spacing={10}>
                        <MainPublication />
                    </Grid>
                </Container>
            </main>

    )
}

const mapStateToProps = (state) => {
    return {
        photosRes:state.initialLikes.arrPhotos
    }
}

const mapDispatchToProps ={
    arrLike
}

export default connect (mapStateToProps,mapDispatchToProps)(Main);
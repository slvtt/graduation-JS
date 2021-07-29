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
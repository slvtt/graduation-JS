import React, { useEffect, useState } from 'react';
import { Container,Grid, } from '@material-ui/core';
import nodeFetch from 'node-fetch';
import { createApi } from 'unsplash-js';
import {connect} from "react-redux";
import {nanoid} from "nanoid";

import {accessKey,redirect_url,secret} from '../consts/consts'
import MainPublication from '../components/main-publication/main-publication';
import {arrLike} from "../redux/actions/arrLikeAction";
import Slider from "../components/main-publication/like-group/slider/Slider";
import Alert from "../components/Alert";
import {likeErrorLeave} from "../redux/actions/likeClick";

const unsplash = createApi({
    accessKey:accessKey,
    secret:secret,
    callbackUrl: redirect_url,
    fetch:nodeFetch,
});

function Main ({arrLike,photosRes,isLoaded,hasError}) {
    let photo = null;
    const [fetching,setFetching] = useState(true);
    const [currentPhotos, setCurrentPhotos] = useState(10);

    const scrollHandler = (e) => {
        if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100 ) {
            console.log('scroll')
            setFetching(true)
        }
    }
    useEffect(()=>{
        if (fetching) {
                if (currentPhotos < 30){
                    photo = unsplash.photos.getRandom({count:currentPhotos}).then(result => {
                        if (result) {
                            arrLike([...photosRes, ...result.response])
                            setCurrentPhotos(prevState => prevState + 1);
                        }
                    })
                        .catch(() => alert('Приложение временно не работает. Зайдите чуть попозже'))
                        .finally(() => {setFetching(false);})
                }
            }

    },[fetching])
    useEffect(()=>{
        document.addEventListener('scroll',scrollHandler)
        return function (){
            document.removeEventListener('scroll',scrollHandler)
        }
    },[])

    return(
            <main>
                <Container style={{marginTop:'40px'}} >
                    <Alert hasError={hasError}/>
                    <Grid container spacing={10}>
                        <MainPublication key={nanoid(4)} />
                    </Grid>
                    <Slider showSlider = {isLoaded}/>
                </Container>
            </main>
    )
}

const mapStateToProps = (state) => {
    return {
        photosRes:state.initialLikes.arrPhotos,
        hasError:state.initialLikes.error,
        isLoaded:state.initialLikes.isLoaded
    }
}

const mapDispatchToProps ={
    arrLike,
}

export default connect (mapStateToProps,mapDispatchToProps)(Main);
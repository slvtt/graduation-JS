import React, { useEffect, useState } from 'react';
import { Container,Grid } from '@material-ui/core';

import nodeFetch from 'node-fetch';
import { createApi } from 'unsplash-js';

import {accessKey,redirect_url,secret} from '../consts/consts'

import MainPublication from '../components/main-publication/main-publication';


const unsplash = createApi({
    accessKey:accessKey,

    secret:secret,

    callbackUrl: redirect_url,
    
    fetch:nodeFetch,

});


const photo = unsplash.photos.getRandom({count:10}).then(result =>{
    const responcePhotos = result.response


    const linksUsers = responcePhotos.map(item => item.user.links.html)
    const arrUrls=responcePhotos.map(item => item.urls.regular)
    const profileImages= responcePhotos.map(item => item.user.profile_image.small)
    const userNickName = responcePhotos.map(item => item.user.username)
    const countLike = responcePhotos.map(item => item.likes)
    const photos_id = responcePhotos.map(item => item.id)


    localStorage.setItem('userImg',JSON.stringify((profileImages)))
    localStorage.setItem('users_urls',JSON.stringify(linksUsers))
    localStorage.setItem('user_names',JSON.stringify(userNickName))
    localStorage.setItem('likes',JSON.stringify(countLike))
    localStorage.setItem('photos',JSON.stringify(arrUrls))
    localStorage.setItem('photos_id',JSON.stringify(photos_id))

})

const array = JSON.parse(window.localStorage.getItem('photos'));



function Main () {
    const [photos,setPhotos] = useState([]);
    const [links,setlinks] = useState([]);
    const [profImg,setProfImg] = useState([]);
    const [userNick,setUserNick] = useState([]);
    const [photoLike,setPhotoLike] = useState([]);
    const [identifiers,setIdentifiers] = useState([]);

    useEffect(()=>{
        const raw = localStorage.getItem('photos')
        
        if(raw){
            setPhotos(JSON.parse(raw))
        }
        
    },[]);

    useEffect(()=>{
        const arrLinks = localStorage.getItem('users_urls');

        if(arrLinks) setlinks(JSON.parse(arrLinks))
    },[]);

    useEffect(()=>{
        const arrProfImg = localStorage.getItem('userImg');

        if(arrProfImg) setProfImg(JSON.parse(arrProfImg))
    },[])

    useEffect(()=>{
        const userNicks = localStorage.getItem('user_names')

        if (userNicks) setUserNick(JSON.parse(userNicks))
    },[])

    useEffect(()=>{
        const userLikes = localStorage.getItem('likes')

        if (userLikes) setPhotoLike(JSON.parse(userLikes))
    },[])

    useEffect(()=>{
        const photos_id = localStorage.getItem('photos_id')

        if (photos_id) {
            setIdentifiers(JSON.parse(photos_id))
        }
    },[])

    return(
            <main>
                <Container style={{marginTop:'40px'}} >
                    <Grid container spacing={10}>
                        <MainPublication
                            userNickName = {userNick}
                            userImg = {profImg}
                            countLike = {photoLike}
                            setLikes={setPhotoLike}
                            imgSrc = {photos}
                            userLinks = {links}
                            id = {identifiers}
                        />
                    </Grid>
                </Container>
            </main>

    )
}

export default Main
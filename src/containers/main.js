import React, { useEffect, useState } from 'react';
import { Container,Grid } from '@material-ui/core';

import nodeFetch from 'node-fetch';
import { createApi } from 'unsplash-js';


import MainPublication from '../components/main-publication/main-publication';
const unsplash = createApi({
    accessKey:'wdNn-PaVrpGbxNb07igZx_c2D-f8ux2_1LTZb-uyA6U',

    secret:"vlJy_e3ElNhZFQntKWkm653HgKv0JpU1dj1Ln7NOB64",

    callbackUrl: "urn:ietf:wg:oauth:2.0:oob",
    
    fetch:nodeFetch
});

// const code = 'rQ2NgzQiAydPPy0xbNJegDCh4VhHF9wbEefYbHeNx;lY';

// if (code) {
//     unsplash.auth.userAuthentication(code)
//         .then(res =>
//             res.json())
//         .then(json => {
//             unsplash.auth.setBearerToken(json.access_token);
//             //делаем что-то от имени пользователя
//         });
// }

const photo = unsplash.photos.getRandom({count:10}).then(result =>{
    const responcePhotos = result.response
    // console.log(responcePhotos)
    let arrUrls=responcePhotos.map(item => item.urls.regular)

    let users = responcePhotos.map(item => item.user.links.self)
    // console.log(users)
    localStorage.setItem('photos',JSON.stringify(arrUrls))

})

const array = JSON.parse(window.localStorage.getItem('photos'))

// console.log(array)

function Main () {
    const [photos,setPhotos] = useState([]);

    useEffect(()=>{
        const raw = localStorage.getItem('photos')
        
        if(raw){
            setPhotos(JSON.parse(raw))
        }
        
    },[])

    // console.log(photos)
    return(
        <main>
        <Container style={{marginTop:'40px'}} >
            <Grid container spacing={10}>

                <MainPublication
                    imgSrc = {photos}
                />
            </Grid>

        </Container>
            </main>
    )
}

export default Main
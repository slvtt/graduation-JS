
import React, { useEffect, useState } from 'react';
import { Container,Grid } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

import nodeFetch from 'node-fetch';
import { createApi } from 'unsplash-js';

import MainPublication from '../components/main-publication'
const unsplash = createApi({
    accessKey:'wdNn-PaVrpGbxNb07igZx_c2D-f8ux2_1LTZb-uyA6U',
    fetch:nodeFetch
})

const photo = unsplash.photos.getRandom({count:10}).then(result =>{
    
    const responcePhotos = result.response
    // console.log(responcePhotos)

    let arrUrls=responcePhotos.map(item => item.urls.regular)

    // console.log(arrUrls)

    localStorage.setItem('photos',JSON.stringify(arrUrls))

})

const array = JSON.parse(window.localStorage.getItem('photos'))

// console.log(array)

function Main () {
    const classes = useStyles();
    const [photos,setPhotos] = useState([]);


    useEffect(()=>{
        const raw = localStorage.getItem('photos')
        
        if(raw){
            setPhotos(JSON.parse(raw))
        }
        
    },[])


    console.log(photos)
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
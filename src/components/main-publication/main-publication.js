import React from 'react';
import {Avatar ,Grid,Box } from '@material-ui/core';
import classNames from 'classnames';
import {makeStyles} from '@material-ui/core/styles';
import LikeBtnGroup from '../like-group/likeGroup';

import { nanoid } from 'nanoid'

const MainPublication = ({imgSrc,userLinks,userImg,userNickName,countLike}) =>{
    const userNick = userNickName
    const classes = useStyles();

    return imgSrc.map((item,index) =>(
            <Grid key={nanoid(10)}  style={{ height: 'auto !important' }} item xs={6} >
                    <div>
                        <div className="header-img-block">
                            <Avatar src={userImg[index]}></Avatar>
                            <Box className={classNames(classes.colorBlack,classes.nickName,classes.nickNameMain)}  component="span">
                                <a href={userLinks[index]}>{userNickName[index]}</a>
                            </Box>
                        </div>
                        <div className="main-img">
                            <img src={item}/> 
                        </div>

                        <div className="main-img_like">
                            <span className="like-counter">Нравится:{countLike[index]}</span>
                            <LikeBtnGroup
                                photo={item}
                                userNickName={userNick[index]}
                                userImg={userImg[index]}
                            />
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
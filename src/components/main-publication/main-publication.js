import React from 'react';
import {Avatar ,Grid,Box } from '@material-ui/core';
import classNames from 'classnames';
import {makeStyles} from '@material-ui/core/styles';
import { nanoid } from 'nanoid';
import {connect} from "react-redux";

import LikeBtnGroup from './like-group/likeGroup';
import {hideSlider, showSlider} from "../../redux/actions/slider";
import Loading from "../loading/Loading";

const MainPublication = ({photosRes,showSlider}) =>{
    const classes = useStyles();

    if (photosRes === 0 ) {
        return <Loading/>
    }
    return photosRes? photosRes.map((item,index) => (
        <React.Fragment key={nanoid(4)}>
            <Grid key={nanoid(10)}  style={{ height: 'auto !important' }} item xs={4} >
                <div>
                    <div className="header-img-block">
                        <Avatar src={item.user.profile_image.small}></Avatar>
                        <Box className={classNames(classes.colorBlack,classes.nickName,classes.nickNameMain)}  component="span">
                            <a href={item.user.links.html}>{item.user.username}</a>
                        </Box>
                    </div>
                    <div onClick={()=> {
                        showSlider(index)
                    }} className="main-img">
                        <img src={item.urls.regular}/>
                    </div>
                    <div className="main-img_like">
                        <span className="like-counter">Нравится:{item.likes}</span>
                        <LikeBtnGroup
                            key={nanoid(4)}
                            photoId = {item.id}
                            userNickName={item.user.username}
                            userIcon={item.user.profile_image.small}
                            isLiked={item.liked_by_user}
                            photoIndex={index}
                        />
                    </div>
                </div>
            </Grid>
        </React.Fragment>
    )):Array(photosRes.length).fill(0).map((_)=> <Loading/>)
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
const mapStateToProps = (state) => {

    return {
        photosRes:state.initialLikes.arrPhotos
    }
}
const mapDispatchToProps = {
  showSlider,
    hideSlider
}

export default connect (mapStateToProps,mapDispatchToProps)(MainPublication);
import React from 'react';
import {Avatar ,Grid,Box } from '@material-ui/core';
import classNames from 'classnames';
import {makeStyles} from '@material-ui/core/styles';
import LikeBtnGroup from '../like-group/likeGroup';

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
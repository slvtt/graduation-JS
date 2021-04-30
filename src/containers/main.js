
import React from 'react';
import { Container,Avatar ,Grid,Box } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import classNames from 'classnames';
import testImg from '../public/img/test.jpg'
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
                            <section className="like-button-group">
                                <button className="like-btn btn"></button>
                                <button className="magnifier btn"></button>
                            </section>
                        </div>
                    </div>
                </Grid>

                <Grid item xs={6}>
                    <div className="bg-black"></div>
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
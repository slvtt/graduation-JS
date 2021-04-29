
import React from 'react';
import { Container, Grid } from '@material-ui/core';
function Main () {
    return(
        <main>
        <Container style={{marginTop:'40px'}} >

            <Grid container spacing={10}>

                <Grid item xs={6}>
                    <div>asdfasdf</div>
                </Grid>

                <Grid item xs={6}>
                    <div className="bg-black">asdfasdf</div>
                </Grid>

            </Grid>

        </Container>
            </main>
    )
}

export default Main
import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import style from "../HomeSections/style.module.css"

function News() {
    return (
        <>
            <Container style={{ padding: '3% 0%' }}>
                <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: '5% ' }}>

                    <div style={{ textAlign: 'center' }}>
                        <div style={{ borderTop: '2px solid #ffa800', width: '30%', margin: '30px auto' }}></div>
                        <h4 style={{ fontSize: '15px', letterSpacing: '0.3rem', color: '#a5a5a5' }}>TAKE A LOOK AT OUR</h4>
                        <h2 style={{ fontSize: '40px', fontWeight: '500', padding: '3% 0%' }}>A simple trading system</h2>
                    </div>
                </div>
                <Grid container spacing={2}>

                    <Grid item lg={4} md={12} xs={12} style={{ position: 'relative' }}>
                        <Card sx={{ maxWidth: 345 }} >
                            <CardMedia
                                sx={{ height: 290 }}
                                image="https://preview.colorlib.com/theme/invest/images/news_1.jpg"
                                title="bitcoin"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    New Regulations on the Crypto Market
                                </Typography>
                                <Typography style={{ padding: '3% 0%' }} variant="body2" color="text.secondary">
                                    Morbi ut dapibus dui. Sed ut iaculis elit, quis varius mauris. Integer ut ultricies orci.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <button className={style.herobtn} style={{ padding: '0px 25px ', position: 'absolute', bottom: '-7%' }} size="small">Read More</button>
                            </CardActions>
                        </Card>

                    </Grid>
                    <Grid item lg={4} md={12} xs={12} style={{ position: 'relative' }}>
                    <Card sx={{ maxWidth: 345 }} >
                            <CardMedia
                                sx={{ height: 290 }}
                                image="https://preview.colorlib.com/theme/invest/images/news_1.jpg"
                                title="bitcoin"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    New Regulations on the Crypto Market
                                </Typography>
                                <Typography style={{ padding: '3% 0%' }} variant="body2" color="text.secondary">
                                    Morbi ut dapibus dui. Sed ut iaculis elit, quis varius mauris. Integer ut ultricies orci.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <button className={style.herobtn} style={{ padding: '0px 25px ', position: 'absolute', bottom: '-7%' }} size="small">Read More</button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item lg={4} md={12} xs={12} style={{ position: 'relative' }}>
                        <Card sx={{ maxWidth: 345 }} >
                            <CardMedia
                                sx={{ height: 290 }}
                                image="https://preview.colorlib.com/theme/invest/images/news_3.jpg"
                                title="bitcoin"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    New Regulations on the Crypto Market
                                </Typography>
                                <Typography style={{ padding: '3% 0%' }} variant="body2" color="text.secondary">
                                    Morbi ut dapibus dui. Sed ut iaculis elit, quis varius mauris. Integer ut ultricies orci.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <button className={style.herobtn} style={{ padding: '0px 25px ', position: 'absolute', bottom: '-7%' }} size="small">Read More</button>
                            </CardActions>
                        </Card>

                    </Grid>

                </Grid>
            </Container>
        </>
    )
}

export default News
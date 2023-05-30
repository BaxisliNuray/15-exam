import { Container } from '@mui/system'
import Grid from '@mui/material/Grid';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import style from "../HomeSections/style.module.css"
import ContentCutIcon from '@mui/icons-material/ContentCut';

function Cards2() {
    return (
        <div style={{ padding: '3% 0%' }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item lg={4} md={6} sm={12} xs={12}>
                        <Card className={style.card2} style={{ boxShadow: 'none', }} sx={{ maxWidth: 390 }}>
                            <CardActionArea style={{ padding: '90px 55px', position: 'relative' }}>

                                <ContentCutIcon style={{ fontSize: '70px', position: 'absolute', left: '50%', top: '6%', transform: 'translate(-50%,-0%)' }} />
                                <CardContent style={{ textAlign: 'center' }}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Bitcoin To Fiat Currency Calculator
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, error dolorem culpa porro dignissimos qui dicta ipsum sapiente eligendi exercitationem hic vero est voluptatibus labore nihil sit delectus iure sint quam. Eaque numquam cumque itaque?
                                    </Typography>
                                    <Button style={{ paddingTop: '7%' }}>Read more</Button>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item lg={4} md={6} sm={12} xs={12}>
                        <Card className={style.card2} style={{ boxShadow: 'none', }} sx={{ maxWidth: 390 }}>
                            <CardActionArea style={{ padding: '90px 55px', position: 'relative' }}>

                                <ContentCutIcon style={{ fontSize: '70px', position: 'absolute', left: '50%', top: '6%', transform: 'translate(-50%,-0%)' }} />
                                <CardContent style={{ textAlign: 'center' }}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Bitcoin To Fiat Currency Calculator
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, error dolorem culpa porro dignissimos qui dicta ipsum sapiente eligendi exercitationem hic vero est voluptatibus labore nihil sit delectus iure sint quam. Eaque numquam cumque itaque?
                                    </Typography>
                                    <Button style={{ paddingTop: '7%' }}>Read more</Button>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item lg={4} md={6} sm={12} xs={12}>
                        <Card className={style.card2} style={{ boxShadow: 'none', }} sx={{ maxWidth: 390 }}>
                            <CardActionArea style={{ padding: '90px 55px', position: 'relative' }}>

                                <ContentCutIcon style={{ fontSize: '70px', position: 'absolute', left: '50%', top: '6%', transform: 'translate(-50%,-0%)' }} />
                                <CardContent style={{ textAlign: 'center' }}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Bitcoin To Fiat Currency Calculator
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, error dolorem culpa porro dignissimos qui dicta ipsum sapiente eligendi exercitationem hic vero est voluptatibus labore nihil sit delectus iure sint quam. Eaque numquam cumque itaque?
                                    </Typography>
                                    <Button style={{ paddingTop: '7%' }}>Read more</Button>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                </Grid>
            </Container>
        </div>
    )
}

export default Cards2
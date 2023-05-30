import { Container } from '@mui/system'
import React from 'react'
import Grid from '@mui/material/Grid';
import style from "../HomeSections/style.module.css"

function Bitcoin() {
    return (
        <div style={{background:'#f5f9fa'}}>
            <Container>
                <Grid container style={{ padding: '10% 0%' }} spacing={2}>
                    <Grid style={{margin:'0 auto'}} item lg={6} md={12} sm={12} xs={12} >
                        <img  src="https://preview.colorlib.com/theme/invest/images/intro.png" alt="bitcoin" />
                    </Grid>
                    <Grid item lg={6} md={12} sm={12} xs={12}>
                        <div style={{ display: 'flex', justifyContent: 'start' }}>

                            <div >
                                <div style={{ borderTop: '3px solid #ffa800', width: '20%', margin: '30px 0px' }}></div>
                                <h4 style={{ fontSize: '15px', letterSpacing: '0.3rem', color: '#a5a5a5' }}>TAKE A LOOK AT OUR</h4>
                                <h2 style={{ fontSize: '40px', fontWeight: '500', padding: '3% 0%' }}>Buy and Sell Bitcoin</h2>
                                <p style={{padding:'2% 0%',lineHeight:'2',color:'#838383'}}>  Morbi ut dapibus dui. Sed ut iaculis elit, quis varius mauris. Integer ut ultricies orci, lobortis egestas sem. Morbi ut dapibus dui. Sed ut iaculis elit.Morbi ut dapibus dui. Sed ut iaculis elit, quis varius mauris. Integer ut ultricies orci, lobo rtis egestas sem. Morbi ut dapibus dui. Sed ut iaculis elit. Morbi ut dapibus dui. Sed ut iaculis elit, quis varius mauris. Integer ut ultricies orci, lobortis egestas sem. Morbi ut dapibus dui. Sed ut iaculis elit.</p>
                                <button className={style.herobtn}>READ MORE</button>

                            </div>
                        </div>
                    </Grid>

                </Grid>
            </Container>
        </div>
    )
}

export default Bitcoin
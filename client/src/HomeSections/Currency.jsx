import { Container } from '@mui/system'
import React from 'react'
import Grid from '@mui/material/Grid';

function Currency() {
    return (
        <>
            <div style={{ backgroundImage: 'linear-gradient(90deg, rgba(7,5,77,0.7343312324929971) 0%, rgba(8,11,61,0.8827906162464986) 100%),url(https://images.barrons.com/im-489169?width=1280&size=1.33333333)', height: '70vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <Container>
                    <Grid container spacing={4}>
                        <Grid item lg={5} md={12} sm={12} xs={12}>

                            <div >
                                <div style={{ borderTop: '3px solid #ffa800', width: '20%', margin: '30px 0px' }}></div>
                                <h4 style={{ fontSize: '15px', letterSpacing: '0.3rem', color: '#a5a5a5' }}>TAKE A LOOK AT OUR</h4>
                                <h2 style={{ fontSize: '40px', fontWeight: '500', padding: '3% 0%', color: 'white' }}>Bitcoin To Fiat Currency Calculator</h2>
                                <p style={{ lineHeight: '2', color: 'white' }}>Morbi ut dapibus dui. Sed ut iaculis elit, quis varius mauris. Integer ut ultricies orci, lobortis egestas sem. Morbi ut dapibus dui. Sed ut iaculis elit.Morbi ut dapibus dui. Sed ut iaculis elit, quis varius mauris. Integer ut ultricies orci, lobo rtis egestas sem. Morbi ut dapibus dui. Sed ut iaculis elit. Morbi ut dapibus dui. Sed ut iaculis elit, quis varius mauris. Integer ut ultricies orci, lobortis egestas sem. Morbi ut dapibus dui. Sed ut iaculis elit.</p>
                            </div>
                        </Grid>
                        <Grid style={{ position: 'relative',margin:'10% auto' }} item lg={7} md={12} sm={12} xs={12}>
                            <div style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)' }}>
                                <input type="text" style={{ margin: '0px 10px', background: 'transparent', border: '1px solid white', padding: '20px 0px', width: '20%' }} />
                                <input type="text" style={{ margin: '0px 10px', background: 'transparent', border: '1px solid white', padding: '20px 0px', width: '24%' }} />
                                <span style={{ color: 'white', padding: '0% 2%' }}>=</span>
                                <input type="text" style={{ margin: '0px 10px', background: 'transparent', border: '1px solid white', padding: '20px 0px', width: '20%' }} />
                                <input type="text" style={{ margin: '0px 10px', background: 'transparent', border: '1px solid white', padding: '20px 0px', width: '15%' }} />

                            </div>

                            <div style={{ position: 'absolute', top: '70%', transform: 'translateY(-50%)' }}>
                                <input type="text" style={{ margin: '0px 10px', background: 'transparent', border: '1px solid white', padding: '20px 0px', width: '20%' }} />
                                <input type="text" style={{ margin: '0px 10px', background: 'transparent', border: '1px solid white', padding: '20px 0px', width: '24%' }} />
                                <span style={{ color: 'white', padding: '0% 2%' }}>=</span>
                                <input type="text" style={{ margin: '0px 10px', background: 'transparent', border: '1px solid white', padding: '20px 0px', width: '20%' }} />
                                <input type="text" style={{ margin: '0px 10px', background: 'transparent', border: '1px solid white', padding: '20px 0px', width: '15%' }} />

                            </div>

                        </Grid>

                    </Grid>
                </Container>


            </div>
        </>

    )
}

export default Currency
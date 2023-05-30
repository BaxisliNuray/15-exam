import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import PinterestIcon from '@mui/icons-material/Pinterest';
import GoogleIcon from '@mui/icons-material/Google';
import RedditIcon from '@mui/icons-material/Reddit';

function Footer() {
  return (
    <>


      <div style={{ background: 'black', padding: '4% 0%' }}>
        <Container>
          <Grid container spacing={2}>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <Typography style={{ display: 'flex', alignItems: 'center' }} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <img src="https://preview.colorlib.com/theme/invest/images/logo.png" alt="" />
                <span style={{ color: '#ffa800', fontSize: '30px' }}>IN</span><span style={{ color: 'white', fontSize: '30px' }}>VEST</span>
              </Typography>
              <p style={{ color: 'white', padding: '10px ', lineHeight: '2' }}>Sed ut iaculis elit, quis varius mauris. Integer ut ultricies orci, lobortis egestas sem. Morbi ut dapibus dui. Sed ut iaculis elit. Integer ut imperdiet erat. Quisque ultricies lectus tellus, eu tristique magna pharetra nec.</p>
            </Grid>
            <Grid item style={{ color: 'white' }} lg={3} md={4} sm={12} xs={12}>
              <h1 style={{ fontWeight: '200', paddingBottom: '5%' }}>Useful Links</h1>
              <p>HOME</p> <br />
              <p>ADD</p>

            </Grid>
            <Grid item style={{ color: 'white' }} lg={5} md={4} sm={12} xs={12}>
              <h1 style={{ fontWeight: '200', paddingBottom: '5%' }}>Subscribe to our newsletter</h1>
              <input style={{ border: '1px solid gold', borderRadius: '3px', marginBottom: '3%', padding: '10px 20px' }} id="outlined-basic" label="Your E-mail" variant="outlined" /> <br />
              <small>Sed ut iaculis elit, quis varius mauris. Integer ut ultricies orci, lobortis egestas sem. Morbi ut dapibus dui. Sed ut iaculis elit. Integer ut imperdiet erat. Quisque ultricies lectus tellus, eu tristique magna pharetra nec.</small> <br />

              < PinterestIcon style={{margin:'30px 4px'}} />
              <GoogleIcon style={{margin:'30px 4px'}} />
              <RedditIcon style={{margin:'30px 4px'}} />
            </Grid>

          </Grid>
        </Container>
      </div>


    </>
  )
}

export default Footer
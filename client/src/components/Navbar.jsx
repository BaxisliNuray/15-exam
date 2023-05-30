import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Container } from '@mui/system';
import { Link } from "react-router-dom"

function Navbar() {

    return (
        <>
            <AppBar style={{ background: 'black',boxShadow:'none' }} position="static">
                <Container>
                    <Toolbar style={{ height: '10vh' }}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                        </IconButton>
                        <Typography style={{ display: 'flex', alignItems: 'center' }} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <img src="https://preview.colorlib.com/theme/invest/images/logo.png" alt="" />
                            <span style={{ color: '#ffa800', fontSize: '30px' }}>IN</span><span style={{ color: 'white', fontSize: '30px' }}>VEST</span>
                        </Typography>
                        <Typography style={{ padding: '0% 1% ' }}>BTC $10200</Typography>
                        <Typography style={{ padding: '0% 1% ' }}> ETH $979</Typography>
                        <Typography style={{ padding: '0% 1% ' }}> LTC $230</Typography>
                        <Button style={{ color: '#ffa800' }}>Register</Button>
                        <span style={{ color: '#ffa800' }}>|</span>
                        <Button style={{ color: '#ffa800' }}>Login</Button>


                    </Toolbar>
                </Container>
                <Toolbar style={{ background: '#ffa800' }}>
                    <Container style={{ display: 'flex', justifyContent: 'center' }}>
                        <Link to='/' style={{textDecoration:'none',color:'white',padding:'0px 10px',fontWeight:'700'}}>HOME</Link>
                        <Link to="/add" style={{textDecoration:'none',color:'white',padding:'0px 10px',fontWeight:'700'}}>ADD</Link>
                    </Container>


                </Toolbar>

            </AppBar>

        </>
    )
}

export default Navbar
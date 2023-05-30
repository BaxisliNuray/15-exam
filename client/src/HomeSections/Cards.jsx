import { Container } from '@mui/system'
import React, { useEffect, useRef, useState } from 'react'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { deleteById, getAll } from '../api/requests';
import { Link } from 'react-router-dom';
import Swal from "sweetalert2"
import Search from './Search';
import Sort from './Sort';

function Cards() {
    const [invest, setInvest] = useState()
    const storage=useRef()
    useEffect(() => {
        getAll().then((resp) => {
            setInvest(resp)
            storage.current=resp
        })
    }, [])

    return (
        <div style={{ padding: '5% 0%',background:'#f5f9fa' }}>
            <Container>
                <div style={{ display: 'flex', justifyContent: 'center' }}>

                    <div style={{ textAlign: 'center' }}>
                        <div style={{ borderTop: '2px solid #ffa800', width: '30%', margin: '30px auto' }}></div>
                        <h4 style={{ fontSize: '15px', letterSpacing: '0.3rem', color: '#a5a5a5' }}>TAKE A LOOK AT OUR</h4>
                        <h2 style={{ fontSize: '40px', fontWeight: '500', padding: '3% 0%' }}>A simple trading system</h2>
                    </div>
                </div>
                <Search storage={storage} setInvest={setInvest} />
                <Sort invest={invest} setInvest={setInvest} />
                <Grid style={{ padding: '6% 0%' }} container spacing={2}>
                    {invest && invest.map((inv) => (
                        <Grid key={inv._id}  item lg={4} md={3} sm={6} xs={12}>
                            <Card sx={{ maxWidth: 345 }} >
                                <CardMedia
                                    sx={{ height: 250 }}
                                    image={inv.img}
                                    title="invest"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        <Link to={`/title/${inv._id}`}>{inv.title}</Link>
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {inv.desc}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {inv.price}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" onClick={() => {
                                        Swal.fire({
                                            title: 'Are you sure?',
                                            text: "You won't be able to revert this!",
                                            icon: 'warning',
                                            showCancelButton: true,
                                            confirmButtonColor: '#3085d6',
                                            cancelButtonColor: '#d33',
                                            confirmButtonText: 'Yes, delete it!'
                                        }).then((result) => {
                                            if (result.isConfirmed) {
                                                deleteById(inv._id).then(() => {
                                                    Swal.fire(
                                                        `${inv.title} Deleted!'`,
                                                        'Your file has been deleted.',
                                                        'success'
                                                    )
                                                })
                                                setInvest(invest.filter((x)=>x._id!==inv._id))
                                            }
                                        })
                                    }}>Delete</Button>
                                </CardActions>
                            </Card>

                        </Grid>

                    ))}
                </Grid>





            </Container>
        </div>
    )
}

export default Cards
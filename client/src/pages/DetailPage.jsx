
import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { deleteById, getById } from '../api/requests';
import { Link, useParams } from 'react-router-dom';
import Swal from "sweetalert2"
import { Container } from '@mui/system';

function DetailPage() {
  const [inv, setInv] = useState([])
  const { id } = useParams()
  useEffect(() => {
    getById(id).then((resp) => {
      setInv(resp)
    })
  }, [id])

  return (
    <>
      <Container>
        <Grid key={inv._id} item lg={4} md={3} sm={6} xs={12}>
          <Card sx={{ maxWidth: 345 }}>
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
                    setInv(inv.filter((x) => x._id !== inv._id))
                  }
                })
              }}>Delete</Button>
            </CardActions>
          </Card>

        </Grid>
      </Container>
    </>
  )
}

export default DetailPage
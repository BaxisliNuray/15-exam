import { Container } from '@mui/system'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useFormik } from "formik"
import { useNavigate } from "react-router-dom"
import { postInv } from '../api/requests';
import { validationSchema } from '../Validation/Schema';


function Add() {
  const navigate = useNavigate()
  const [inv, setInv] = useState([])
  const handleSubmit = async (values, actions) => {
    await postInv(values)
    setInv([inv, values])
    actions.resetForm()
    navigate("/")
  }

  const formik = useFormik({
    initialValues: {
      title: '',
      desc: '',
      img: '',
      price: ''
    },
    onSubmit: handleSubmit,
    validationSchema: validationSchema
  })


  return (
    <>
      <Helmet>
        <title>ADD</title>
      </Helmet>
      <Container>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <form onSubmit={formik.handleSubmit} >
            <TextField
              className={formik.touched.title && formik.errors.title ? "input-error" : ""}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="title"
              type="text"
              value={formik.values.title}
              id="standard-basic" label="Title" variant="standard" /><br />
              {(formik.touched.title && formik.errors.title) && <small style={{color:'red'}}>{formik.errors.title}</small>} 
               <br />
            <TextField
              className={formik.touched.desc && formik.errors.desc ? "input-error" : ""}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="desc"
              type="text"
              value={formik.values.desc}
              id="standard-basic" label="Desc" variant="standard" /> <br />
              {(formik.touched.desc && formik.errors.desc) && <small style={{color:'red'}}>{formik.errors.desc}</small>} 
              <br />
            <TextField
              className={formik.touched.img && formik.errors.img ? "input-error" : ""}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="img"
              type="url"
              value={formik.values.img}
              id="standard-basic" label="Image" variant="standard" /><br />
              {(formik.touched.img && formik.errors.img) && <small style={{color:'red'}}>{formik.errors.img}</small>} 
               <br />
            <TextField
              className={formik.touched.price && formik.errors.price ? "input-error" : ""}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="price"
              type="number"
              value={formik.values.price}
              id="standard-basic" label="Price" variant="standard" /><br />
              {(formik.touched.price && formik.errors.price) && <small style={{color:'red'}}>{formik.errors.price}</small>} 
               <br />
            <Button type='submit' disabled={Object.keys(formik.errors).length>0}>ADD</Button>
          </form>
        </div>
      </Container>

    </>
  )
}

export default Add
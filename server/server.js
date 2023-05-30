const express = require('express')
const cors = require("cors")
const bodyParser = require("body-parser")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
dotenv.config()

DB_PASSWORD = process.env.DB_PASSWORD
DB_CONNECTION = process.env.DB_CONNECTION
mongoose.connect(DB_CONNECTION.replace("<password>", DB_PASSWORD)).then(() => { console.log("DB CONNECTED"); })

const InvSchema = new Schema({
    title: String,
    img: String,
    desc: String,
    price: String
})

const InvModuel = mongoose.model("InvModule", InvSchema)

//post
app.post('/inv', async (req, res) => {
    const { title, img, desc, price } = req.body
    const newInv = new InvModuel({
        title: title,
        img: img,
        desc: desc,
        price: price
    })
    await newInv.save()
    res.status(200).send(newInv)
})
//get all
app.get('/inv', async (req, res) => {
    const Datas = await InvModuel.find()
    res.status(200).send(Datas)
})

//get by id
app.get('/inv/:id', async (req, res) => {
    const ID = req.params.id
    const singleData = await InvModuel.findById(ID)
    if (!singleData) {
        res.status(404).send("data can't be found")
    }
    else {
        res.status(200).send(singleData)

    }
})

//get by id
app.delete('/inv/:id', async (req, res) => {
    const ID = req.params.id
    const deleteData = await InvModuel.findByIdAndDelete(ID)
    if (!deleteData) {
        res.status(404).send("data can't be found")
    }
    else {
        res.status(202).send("data DELETED")

    }
})

//put
// app.put('/inv/:id', async (req, res) => {
//     const ID=req.params.id
//     const { title, img, desc, price } = req.body
//     const editInv =await InvModuel(ID,{
//         title: title,
//         img: img,
//         desc:desc,
//         price: price
//     })
//     res.status(200).send(editInv)
// })





const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})
import { BASE_URL } from "./base_url";
import axios from "axios"



//gat all
export const getAll = async () => {
    let getData
    await axios.get(`${BASE_URL}/inv`).then((resp) => {
        getData = resp.data
    })
    return getData
}

//get by id
export const getById = async (ID) => {
    let singleData
    await axios.get(`${BASE_URL}/inv/${ID}`).then((resp) => {
        singleData = resp.data
    })
    return singleData
}

//delete
export const deleteById = async (ID) => {
    let deleteData
    await axios.delete(`${BASE_URL}/inv/${ID}`).then((resp) => {
        deleteData = resp.data
    })
    return deleteData
}

//post
export const postInv = async (payload) => {
    await axios.post(`${BASE_URL}/inv`,payload)
}

//put
export const putInv = async (id,payload) => {
    await axios.put(`${BASE_URL}/inv/${id}`,payload)
}
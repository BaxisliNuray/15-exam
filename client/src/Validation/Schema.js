import * as yup from 'yup';

export const validationSchema=yup.object({
    title:yup.string().max(30,"max 30").required("title REQUIRED"),
    desc:yup.string().max(300,"desc is so long").required("desc REQUIRED"),
    img:yup.string().max(500,"url so long").required("img REQUIRED"),
    price:yup.number().integer().positive("please add + number").required("title REQUIRED")



})
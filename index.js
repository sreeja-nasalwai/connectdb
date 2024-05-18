const express=require('express');
require('dotenv').config();
const app=express();
const port=process.env.PORT;//for any variable use process.env
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/test')
.then(()=>console.log("connection successful"));
const studentRoutes=require('./route/student.router')
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use('/api/students',studentRoutes);
app.get('/',(req,res)=>{//controller function are callback functions
    res.status(200).send("Student");
})
app.listen(port);
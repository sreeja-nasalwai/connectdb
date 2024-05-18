const express=require('express');
const routes=express.Router()
routes.use(express.json())
routes.use(express.urlencoded({extended:true}))
const studentModel=require('../model/student.model')
const {getStudents,postStudents, getId, putStudents, deleteStudents}=require('../controller/student.controller')

routes.post('/',postStudents);
   
routes.get('/',getStudents);
routes.get('/:id',getId);
routes.put('/:id',putStudents)
routes.delete('/:id',deleteStudents);
 // const student={
    //     "id":"1",
    //     "name":"sreeja",
    // }
    // students.push(student);
    // res.status(200).json(student);
// routes.get('/',(req,res)=>{
//     res.status(200).send("Students data");
// })
// routes.get('/:id',(req,res)=>{
//     res.status(200).send("Students data with id");
// })
module.exports=routes;
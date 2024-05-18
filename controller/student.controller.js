const studentModel=require('../model/student.model')
async function getStudents(req,res){
    const students=await studentModel.find({})
    res.status(200).json(students);
}
async function postStudents(req,res){
        try{
           const {id,name,phone,email}=req.body;
           const student=await studentModel.create({
               _id:id,
               name,
               phone,
               email
   
           });
           res.status(200).json(student);
        }catch(error){
           res.status(300).json({"message":"error in inserting"});
   
        }
 }
 async function getId(req,res){
    const {id}=req.params;
    const student=await studentModel.findById(id);
    res.status(200).json(student);
}
async function putStudents(req,res){
    const {id}=req.params;
    const student=await studentModel.findByIdAndUpdate(id,req.body);
    const updateStudent=await studentModel.findById(id);
    res.status(200).json(updateStudent);

}
async function deleteStudents(req,res){
    const {id}=req.params;
    const student=await studentModel.findByIdAndDelete(id);
    res.status(200).json({"message":`student with id ${student} is deleted`})
}
module.exports={getStudents,postStudents,getId,putStudents,deleteStudents};
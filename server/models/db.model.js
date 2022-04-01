const {students} = require('./db')

async function getStudents() {
  return await students.find();
}

async function getStudent(id){
  return await students.findOne({id: id})
}

async function createStudent(student){
  return await students.create(student)
}

async function deleteStudent(id){
  return await students.deleteOne({id: id})
}

async function updateStudent(id, newInfo){
  return await students.findOneAndUpdate({id: id}, newInfo)
}


module.exports = {getStudents, createStudent, deleteStudent, updateStudent, getStudent}
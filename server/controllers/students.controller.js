const dbModel = require('../models/db.model')


async function getAllStudents(ctx) {
  ctx.body = await dbModel.getStudents()
}

async function createStudent(ctx) {
  await dbModel.createStudent(ctx.request.body).then((output) => {
    ctx.body = output
  })
}

async function updateStudent(ctx) {
  await dbModel.updateStudent(ctx.request.body.id, ctx.request.body.newInfo).then((output) =>
    ctx.body = output)
}

async function deleteStudent(ctx) {
  await dbModel.deleteStudent(ctx.request.body.id)
    .then((output) => {
    ctx.body = output
  })

}

async function getStudent(ctx) {
  const resp = await dbModel.getStudent(ctx.request.body.id)
  ctx.body = resp
}


module.exports = {getAllStudents, createStudent, deleteStudent, updateStudent, getStudent}
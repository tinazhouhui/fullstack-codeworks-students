const dbModel = require('../models/db.model')


async function getAllStudents(ctx) {
  ctx.body = await dbModel.getStudents()
}

async function createStudent(ctx) {
  console.log(ctx.request.body)
  await dbModel.createStudent(ctx.request.body).then(() => {
    ctx.body = `Gotcha Buddy! ${ctx.request.body.name} Student Created!`
  })
}

async function updateStudent(ctx) {
  await dbModel.updateStudent(ctx.request.body.id, ctx.request.body.newInfo).then(() =>
  ctx.body = `Gotcha Buddy! ${ctx.request.body.name} Student updated!`)
}

async function deleteStudent(ctx) {
  await dbModel.deleteStudent(ctx.request.body.id).then(() =>
  ctx.body = `Gotcha Buddy! ${ctx.request.body.name} Student deleted!`)
}

async function getStudent(ctx) {
  const resp = await dbModel.getStudent(ctx.request.body.id)
}


module.exports = {getAllStudents, createStudent, deleteStudent, updateStudent, getStudent}
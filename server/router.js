const Router = require('koa-router')
const router = new Router();
const studentsController = require('./controllers/students.controller')

router.get('/students', studentsController.getAllStudents)
router.get('/student', studentsController.getStudent)
router.delete('/student', studentsController.deleteStudent)
router.post('/student', studentsController.createStudent)
router.put('/student', studentsController.updateStudent)


module.exports = router
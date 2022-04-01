const mongoose = require('mongoose');

async function main() {
  await mongoose.connect('mongodb://mongo:27017/CodeWorksStudents');
  console.log('im connected')
}

const StudentSchema = new mongoose.Schema({
  id: {type: Number, required: false},
  name: {type: String, required: false},
  campus: String,
  junior: Boolean,
  age: Number
});

const students = mongoose.model("Students", StudentSchema)

module.exports = {main, students}
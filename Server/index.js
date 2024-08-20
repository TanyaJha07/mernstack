const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const TodoModel = require('./Models/Todos')

const app = express();
app.use(cors())
app.use(express.json());
require('dotenv').config()
db_url= process.env.db_url
console.log(db_url)

mongoose.connect(db_url)

app.post('/add',(req,res)=>{
    const task=req.body.task;
    TodoModel.create({task:task})
    .then(result=>res.json(result))
    .catch(err=>res.json(err))

})
app.listen(3001, () => {
    console.log('Server is running');
});
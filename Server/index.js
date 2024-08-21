const express = require('express'); //express = server
const mongoose = require('mongoose'); //mongoose = mongodb
const cors = require('cors'); //cors = security cross origin resource sharing
const TodoModel = require('./Models/Todos') //require = import

const app = express();
app.use(cors())
app.use(express.json()); //express.json() = middleware for parsing JSON request bodies to object 
require('dotenv').config() //dotenv = environment variable 
db_url= process.env.db_url
console.log(db_url)

mongoose.connect(db_url)

app.get('/get', (req,res) =>{ //req=request, res = response
    TodoModel.find()
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
})

app.delete('/delete/:id',(req,res)=>{ //req=postman frontend
    const {id}=req.params; //params = parameter,url
    TodoModel.findByIdAndDelete({_id:id})
    .then(result=>res.json(result)) //deleted data from mongodb to frontend
    .catch(err=>res.json(err))
}
) 
app.put('/update/:id',(req,res)=>{
    const {id}=req.params;
    TodoModel.findByIdAndUpdate(_id=id,{done:true})
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
}
)

app.post('/add',(req,res)=>{
    const task=req.body.task;
    TodoModel.create({task:task})
    .then(result=>res.json(result))
    .catch(err=>res.json(err))

})
app.listen(3001, () => {
    console.log('Server is running');
});
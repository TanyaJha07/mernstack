// const mongoose = require('mongoose')

// const todoSchema = new mongoose.Schema({
//     task: String.apply,
//     done:{
//         type:Boolean,
//         default:false,
//     }
// })

// const TodoModel = mongoose.model('Todo', todoSchema)
// module.exports= TodoModel

const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    task: {
        type: String,  // Use 'String' directly, not 'String.apply'
        required: true // Optionally, you can add 'required: true' if task is mandatory
    },
    done: {
        type: Boolean,
        default: false,
    }
});

const TodoModel = mongoose.model('Todo', todoSchema);
module.exports = TodoModel;

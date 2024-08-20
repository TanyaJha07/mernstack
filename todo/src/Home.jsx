import React, { useEffect, useState } from 'react'
import Create from './Create'
import axios from 'axios'
import { BsCircleFill,BsFillCheckCircleFill,BsFillTrashFill } from "react-icons/bs";

const home = () => {
    const [todos, setTodos] = useState([]) 

    useEffect(() => {
        axios.get('http://localhost:3001/get')
        .then(result => setTodos(result.data))
        .catch(err => console.log(err))
}, [])
    // useState() is a Hook that allows you to have state variables in functional components.
    // todos is the state variable
    // setTodos is the function to update the state variable
    const  handleEdit = (id)=>{
        axios.put('http://localhost:3001/update/'+id)
        .then(result=>{location.reload()})
        .catch(err=>console.log(err))
      }
      const handleDelete = (id)=>{
        axios.delete('http://localhost:3001/delete/'+id)
        .then(result=>{location.reload()})
        .catch(err=>console.log(err))
      }
    return (
        <div className="home">
          <h2>To Do List</h2>
          <Create />
          {
            todos.length===0
            ?
            <div><h2>No Record</h2></div>
            :
            todos.map(todo => (
                <div className='task'>
                  <div className='checkbox' onClick={()=> handleEdit(todo._id)}>
                  {todo.done?
                  <BsFillCheckCircleFill className='icon'></BsFillCheckCircleFill>
                    : <BsCircleFill className='icon'/>
                }
                 
                  </div>
                    
                 <p className={todo.done? "line_through":""}>
                   {todo.task} 
                  </p>   
                
                <div>
                  <span><BsFillTrashFill className='icon'
                  onClick={()=> handleDelete(todo._id)}
                  /></span>
                </div>
                </div>
            ))
          }
        </div>
      )
    }
    
    export default home
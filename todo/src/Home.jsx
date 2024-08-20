import React, { useState } from 'react'
import Create from './Create'

const home = () => {
    const [todos, setTodos] = useState([]) 
    // useState() is a Hook that allows you to have state variables in functional components.
    // todos is the state variable
    // setTodos is the function to update the state variable
  return (
    <div className='home'>
        <h2> Todo List</h2>
        <Create />
        {
            todos.length ===0 ?
            <div><h2>No Record</h2></div>
            :
            todos.map((todo) => ( // map() creates a new array with the results of calling a function for every array element.
                <div>
                    {todo}
                </div>
            ))
        }
    </div>
  )
}

export default home
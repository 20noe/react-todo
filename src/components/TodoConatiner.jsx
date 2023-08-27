import React, { useState } from 'react'
import TodoList from './TodoList'
import TodoAdd from './TodoAdd'
import { v4 as uuidv4 } from 'uuid';

const TodoConatiner = () => {
  let dummy = [
    {id : uuidv4(),task : "Wake up"},
    {id : uuidv4(),task : "Get Ready"},
    {id : uuidv4(),task : "Go to Office"}
]

  let [list, setList] = useState(dummy)


  function newTask(task) {
    list = [...list, {id : uuidv4(),task : task}]
    // list.push({id : uuidv4(),task : task})
    setList(list)
  }
  let deleteTask=(task)=>
  {
    
    list = list.filter(item=> item !== task);
    setList(list)
  }

  return (
    <div>
      <h1>TODO App</h1>
      <TodoAdd newTask = {newTask}/>
      <br></br>
      <TodoList list = {list} deleteTask = {deleteTask}/>
    </div>
  )
}

export default TodoConatiner

import React from 'react'
import TodoItem from './TodoItem'

const TodoList = (props) => {

    let data = props.list.map((item, idx)=>
    {
        return <TodoItem item = {item} key = {idx} deleteTask = {props.deleteTask}/>
    })
  return (
    <div>
      {data}
    </div>
  )
}

export default TodoList

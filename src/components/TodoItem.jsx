import React from 'react'
import { FaTrash } from "react-icons/fa";

const TodoItem = (props) => {
  return (
    <>
    <p>Task : {props.item.task} <span onClick={()=>{props.deleteTask(props.item)}}><FaTrash /></span></p>
    </>
  )
}

export default TodoItem

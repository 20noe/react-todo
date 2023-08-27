import React from 'react'

const TodoAdd = (props) => {

    let task = ""

    const formHandler = (e) =>
    {
        e.preventDefault()
        if(task !== "")
        {
            props.newTask(task)
        }
        

    }

const inputHandler = (e) =>
{
    task = e.target.value
}
  return (
    <div>
      <form onSubmit={formHandler}>
        <input type="text" onChange={inputHandler}/>
        &nbsp;&nbsp;&nbsp;<button>Add</button>
      </form>
    </div>
  )
}

export default TodoAdd

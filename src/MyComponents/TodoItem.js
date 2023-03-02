import React from 'react'

const TodoItem = ({todo, onDelete}) => {
  return (
    <div className='text-center'>
      <h4 >{todo.title}</h4>
      <p>{ todo.description  }</p>
      <button className="btn btn-sm btn-danger" onClick= {()=>{onDelete(todo)}} >DELETE</button>
      {/* <p>Hi this is me</p> */}
    </div>
  )
}

export default TodoItem

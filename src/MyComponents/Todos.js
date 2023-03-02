import React from 'react'
import TodoItem from './TodoItem' 

const Todos = (props) => {
  return (
    <div className='Container' >
      <h3 className='text-center my-3'>Todo List</h3>
      {/* <TodoItem todo = {props.todos[0]}/> */}

      {props.todos.map((todo)=>{
        return <TodoItem todo={todo} key = {todo.sno}  onDelete = {props.onDelete} />
      })}
    
    </div>
  )
}

export default Todos
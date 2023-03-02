import React from 'react'
import TodoItem from './TodoItem' 

const Todos = (props) => {

  let mystyle = {
    minHeight : "70vh"
  } 

  return (
    <div className='container my-3' style={mystyle}>
      <h3>Todo List</h3>
      {/* <TodoItem todo = {props.todos[0]}/> */}

      {props.todos.length===0 ? "No TODO to display": props.todos.map((todo)=>{
        return <TodoItem todo={todo} key = {todo.sno}  onDelete = {props.onDelete} />
      })
      }
    </div>
  )
}

export default Todos
import './App.css';
import Header from './MyComponents/header';
import Todos from './MyComponents/Todos';
import AddTodo from './MyComponents/AddTodo';
import React, { useState } from 'react'
import Footer from './MyComponents/footer';
import About from './MyComponents/About'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const onDelete = (todo) => {
    console.log("I am onDelete todo = ", "hi");

    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
  }

  const addTodo = (title, desc) => {
    console.log('This is addTodo!')
    let sno;
    if (todos.length === 0)
    {
      sno = 0
    }
    else
    {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }

    setTodos([...todos, myTodo])
    console.log(myTodo)
  }

  // const [todos, setTodos] = usestate([

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: 'Visit market',
      description: 'To buy stuff'
    },
    {
      sno: 2,
      title: 'Watch Match',
      description: 'India cricket match'
    },
    {
      sno: 3,
      title: 'Code',
      description: 'Learn Reactjs'
    }
  ]);

  return (
    <>
      <Router>
        <Header title='TODO' searchBar={true} />
        <Routes>
          {/* <Route exact path="/" render={() => {
            return (
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            )
          }} /> */}

          {/* It is working  */}
          <Route exact path = "/" element = {<div><AddTodo addTodo={addTodo} /> <Todos todos={todos} onDelete={onDelete} /> </div>} />
          {/* <Route exact path = "/" element = {<Todos todos={todos} onDelete={onDelete} />}/> */}

          <Route exact path="/about" element={ <About />} />
            
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

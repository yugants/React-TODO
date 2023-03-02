import './App.css';
import Header from './MyComponents/header';
import Todos from './MyComponents/Todos';
import React, {useState} from 'react'
import Footer from './MyComponents/footer';

function App() {

  const onDelete = (todo)=>{
    console.log("I am onDelete todo = ", "hi");

    setTodos(todos.filter((e)=> {
      return e!==todo;
  }))
  }

  // const [todos, setTodos] = usestate([
    
  const [todos, setTodos] = useState([
    {
      sno : 1,
      title : 'Visit market',
      description : 'To buy stuff'
    },
    {
      sno : 2,
      title : 'Watch Match',
      description : 'India cricket match'
    },
    {
      sno : 3,
      title : 'Code',
      description : 'Learn Reactjs'
    }
  ]);

  return (
    <>
    <Header  title = 'TODO' searchBar = {true}/>
    <Todos todos = {todos} onDelete = {onDelete}/>
    <Footer />
    </>
  );
}

export default App;

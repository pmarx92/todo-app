import './App.css';
import Form from './components/form/Form';
import Header from './components/Header/Header';
import { nanoid } from 'nanoid'
import { useState } from "react";
import Listitem from './components/listitem/Listitem';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState("");


  const handleInput = (item) => {
    setTodo(item);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTodo = {
      id: nanoid(),
      text: todo,
      completed: false,
    }
    
    setTodoList([...todoList].concat(newTodo));
    console.log(todoList);
  }

  return (
    <div className="App">
      <Header title="Todo-App" />
      <Form handleInput={handleInput} handleSubmit={handleSubmit}/>
      <Listitem todoList={todoList} />

    </div>
  );
}

export default App;

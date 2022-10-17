import './App.css';
import Form from './components/form/Form';
import Header from './components/Header/Header';
import { nanoid } from 'nanoid'
import { useEffect, useState } from "react";
import Listitem from './components/listitem/Listitem';
import { setLocalStorage, loadLocalStorage } from "../src/components/localStorage/Storage";


function App() {
  const [todoList, setTodoList] = useState(loadLocalStorage("localSavedTodos") ?? []);
  const [todo, setTodo] = useState("");

  const [editTodo, setEditTodo] = useState([]);
  const [editText, setEditText] = useState("");

  useEffect(() => {
    setLocalStorage("localSavedTodos", todoList);
  })

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

  const handleDelete = (id) => {
    setTodoList([...todoList].filter((todo) => todo.id !== id));
  }

  const toggleCompletion = (id) => {
    setTodoList([...todoList].map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  }

  const handleEdit = (value) => {
    setEditText(value);
  }

  const handleChange = (value) => {
    setEditTodo(value);
  }

  const submitEdit = (id) => {
    setEditTodo([...todoList].map((todo) => todo.id === id ? todo.text = editText : todo));
  }

  return (
    <div className="App">
      <Header title="Todo-App" />
      <Form handleInput={handleInput} handleSubmit={handleSubmit} />
      <Listitem todoList={todoList} handleDelete={handleDelete} toggleCompletion={toggleCompletion} handleEdit={handleEdit} handleChange={handleChange} editTodo={editTodo} submitEdit={submitEdit} />

    </div>
  );
}

export default App;

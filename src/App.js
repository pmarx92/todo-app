import './App.css';
import Form from './components/form/Form';
import Header from './components/Header/Header';
import { nanoid } from 'nanoid'
import { useState } from "react";
import Listitem from './components/listitem/Listitem';

function App() {
  const [list, setList] = useState([
    {id: nanoid(), todo: 'Hello World One'}
  ])

  return (
    <div className="App">
      <Header title="Todo-App" />
      <Form />
      <Listitem />

    </div>
  );
}

export default App;

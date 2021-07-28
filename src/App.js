import React from 'react';
import './App.css';
import Input from './components/Input'
import TodoItem from './components/TodoItem';
import { selectTodoList } from './features/todoSlice';

import { useSelector } from 'react-redux';

function App() {

  const todoList = useSelector(selectTodoList);

  return (
    <div className="App">
      <div className="app__container">
        <div className="app__todoContainer">
          {
            todoList.map(item => (
              <TodoItem
                key={item.id}
                name={item.name}
                done={item.done}
                id={item.id}
              />
            ))
          }
        </div>
        <Input> </Input>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.scss';
import App from './app';
import todoListStore, { TodoListContext } from './store/todo-list';

ReactDOM.render(
  <React.StrictMode>
    <TodoListContext.Provider value={todoListStore}>
      <App />
    </TodoListContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
